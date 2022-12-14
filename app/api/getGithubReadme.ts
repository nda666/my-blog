import type { GithubReadme } from "~/types/github";
import cache from "~/utils/server/cache.server";

interface GetGithubReadmeResponse {
  error: any;
  data: GithubReadme | undefined;
}

export default function getGithubReadme(repoName: string) {
  return new Promise<GetGithubReadmeResponse>((resolve, reject) => {
    const cacheExist = cache.get<GetGithubReadmeResponse>(
      `repository.${repoName}.readme`
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
        const json = await response.json();
        if (json?.content) {
          json.content = atob(json.content);
        }
        const result = {
          data: response.ok ? json : undefined,
          error: response.ok
            ? undefined
            : { type: "api", ...(await response.json()) },
        };
        response.ok && cache.set(`repository.${repoName}.readme`, result);
        resolve(result);
      })
      .catch((error) => {
        resolve({
          data: undefined,
          error,
        });
      })
      .finally(() => {});
  });
}
