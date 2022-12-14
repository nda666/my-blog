import type { GithubRepositories } from "~/types/github";
import cache from "~/utils/server/cache.server";

interface GetGithubReposResponse {
  error: any;
  data: GithubRepositories | undefined;
}

export default function getGithubRepoDetail(repoName: string) {
  return new Promise<GetGithubReposResponse>((resolve, reject) => {
    const cacheExist = cache.get<GetGithubReposResponse>(
      `repository.${repoName}`
    );
    if (cacheExist) {
      resolve(cacheExist);
      console.info("GetGithubReposResponse: from cache");
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
        response.ok && cache.set(`repository.${repoName}`, result);
        resolve(result);
      })
      .catch((error) => {
        resolve({
          data: undefined,
          error,
        });
      })
      .finally(() => {
        console.info("GetGithubReposResponse: from response");
      });
  });
}
