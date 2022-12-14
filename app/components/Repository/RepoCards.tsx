import { GoGitBranch, GoStar } from "react-icons/go";
import { Link } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import type { GithubRepositories } from "~/types/github";

interface RepoCardsInterface {
  repositories: GithubRepositories[];
}

interface RepoCardInterface {
  repository: GithubRepositories;
  index: number;
}

export default function RepoCards(
  props: PropsWithChildren<RepoCardsInterface>
) {
  return (
    <>
      <div className="w-full px-10">
        <div className="lg:columns-3 md:columns-2 sm:columns-1 xs:columns-1 gap-8 space-y-8">
          {props.repositories?.map((repository, index) => (
            <RepoCard repository={repository} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export function RepoCard({
  repository,
  index,
}: PropsWithChildren<RepoCardInterface>) {
  const left = (index + 1) % 2 == 0;
  return (
    <Link
      to={`/repository/${repository.name}`}
      className="group card card-compact bg-base-100 shadow-xl"
    >
      <figure
        className={`flex flex-col h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  align-middle text-slate-100 capitalize text-5xl font-semibold w-full text-center `}
      >
        <div className="animate-bounce">{repository.name[0].toUpperCase()}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{repository.name}</h2>
        <p>{repository.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <div className="mr-1">
              <GoGitBranch />
            </div>
            <div>{repository.forks_count}</div>
          </div>
          <div className="badge badge-outline">
            <div className="mr-1">
              <GoStar />
            </div>
            <div>{repository.stargazers_count}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
