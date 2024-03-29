import config from "~/config.server";
import type {
  GithubRepositories,
  GithubSearchRepositories,
} from "~/types/github";
import cache from "~/cache.server";

interface GetGithubReposResponse {
  error: any;
  data: GithubSearchRepositories | undefined;
}

export default function GetGithubRepos(page = 1, perPage = 15) {
  return new Promise<GetGithubReposResponse>((resolve, reject) => {
    let q = [];
    q.push(`user:${config.githubUsername}`);
    config.githubTopic && q.push(`topic:${config.githubTopic}`);

    let query = new URLSearchParams({
      q: q.join(" "),
      page: page.toString(),
      per_page: perPage.toString(),
    });

    const cacheKey = `repositories.${query}`;
    const cacheExist = cache.get<GetGithubReposResponse>(cacheKey);
    if (cacheExist) {
      resolve(cacheExist);
      return true;
    }

    fetch(`https://api.github.com/search/repositories?${query}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then(async (response) => {
        const json = await response.json();
        const result = {
          data: response.ok ? (json as GithubSearchRepositories) : undefined,
          error: response.ok ? undefined : { type: "api", ...json },
        };

        response.ok && cache.set(cacheKey, result);
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
