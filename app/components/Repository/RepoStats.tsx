import type { GithubRepositories } from "~/types/github";

export interface RepoStatsprops {
  repository: GithubRepositories;
}
export default function RepoStats({ repository }: RepoStatsprops) {
  return (
    <div className="stats stats-vertical bg-primary-focus text-primary-content shadow w-full">
      <div className="stat">
        <div className="stat-title">Package Name</div>
        <div className="stat-value text-base">
          <a
            target={"_blank"}
            rel="noreferrer"
            className="link after:content-['_↗']"
            href={repository.html_url}
          >
            {repository.full_name}
          </a>
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Last Update</div>
        <div className="stat-value text-base">{repository.pushed_at}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Star</div>
        <div className="stat-value">{repository.stargazers_count}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Forks</div>
        <div className="stat-value">{repository.forks_count}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Open Issues Count</div>
        <div className="stat-value">{repository.open_issues_count}</div>
      </div>

      <div className="stat">
        <div className="stat-title">License</div>
        <div className="stat-desc">{repository.license.name}</div>
      </div>
    </div>
  );
}
