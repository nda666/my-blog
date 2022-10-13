export interface GithubReadmeLinks {
  self: string;
  git: string;
  html: string;
}

export interface GithubReadme {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: GithubReadmeLinks;
}
