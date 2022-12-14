import type { Owner } from "~/types/github";

export interface RepoOwnerprops {
  owner: Owner;
}
export default function RepoOwner({ owner }: RepoOwnerprops) {
  return (
    <div className="stats stats-horizontal bg-primary-focus text-primary-content shadow w-full">
      <div className="stat">
        <div className="stat-title">Owner</div>
        <div className="stat-figure">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img alt={owner.login} src={owner.avatar_url} />
            </div>
          </div>
        </div>
        <div className="stat-title">{owner.login}</div>
        <div className="stat-desc">
          <a
            target={"_blank"}
            rel="noreferrer"
            className="link after:content-['_↗']"
            href={owner.html_url}
          >
            {owner.html_url}
          </a>
        </div>
      </div>
    </div>
  );
}
