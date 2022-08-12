import type { GithubRepositories } from "~/types/githubRepositories";
import cache from "~/utils/cache";

interface GetGithubReposResponse {
  error: any;
  data: GithubRepositories[] | undefined;
}

export default function GetGithubRepos() {
  return new Promise<GetGithubReposResponse>((resolve, reject) => {
    const cacheExist = cache.get<GetGithubReposResponse>("repositories");
    if (cacheExist) {
      resolve(cacheExist);
      console.log("GetGithubReposResponse: from cache");
      return true;
    }
    fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`, {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then(async (response) => {
        const result = {
          data: response.ok ? await response.json() : undefined,
          error: response.ok
            ? undefined
            : { type: "api", ...(await response.json()) },
        };
        response.ok && cache.set("repositories", result);
        resolve(result);
      })
      .catch((error) => {
        resolve({
          data: undefined,
          error,
        });
      })
      .finally(() => {
        console.log("GetGithubReposResponse: from response");
      });
  });
}
