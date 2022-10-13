import { GithubReadme } from "~/types/GithubReadme";
import cache from "~/utils/cache";

interface GetGithubReadmeResponse {
  error: any;
  data: GithubReadme | undefined;
}

export default function getGithubReadme(repoName: string) {
  return new Promise<GetGithubReadmeResponse>((resolve, reject) => {
    const cacheExist = cache.get<GetGithubReadmeResponse>(
      `repositories.${repoName}.readme`
    );
    if (cacheExist) {
      resolve(cacheExist);
      return true;
    }
    fetch(
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repoName}/readme`,
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
