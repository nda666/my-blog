import type { GithubRepositories } from "~/types/GithubRepositories";
import cache from "~/utils/cache";

interface GetGithubReposResponse {
  error: any;
  data: GithubRepositories | undefined;
}

export default function getGithubRepoDetail(repoName: string) {
  return new Promise<GetGithubReposResponse>((resolve, reject) => {
    const cacheExist = cache.get<GetGithubReposResponse>(
      `repositories.${repoName}`
    );
    if (cacheExist) {
      resolve(cacheExist);
      console.log("GetGithubReposResponse: from cache");
      return true;
    }
    fetch(
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repoName}`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    )
      .then(async (response) => {
        const result = {
          data: response.ok ? await response.json() : undefined,
          error: response.ok
            ? undefined
            : { type: "api", ...(await response.json()) },
        };
        response.ok && cache.set(`repositories.${repoName}`, result);
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
