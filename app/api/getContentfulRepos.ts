import { EntryCollection } from "contentful";
import { EntryRepository } from "~/types/EntryRepository";
import cache from "~/utils/cache";
import contentfulClient from "~/utils/contenfullClient";

export default function GetContenfullRepos() {
  return new Promise<EntryCollection<EntryRepository>>((resolve, reject) => {
    const cacheExist =
      cache.get<EntryCollection<EntryRepository>>("contentfulRepos");
    if (cacheExist) {
      resolve(cacheExist);
      console.log("GetGithubReposResponse: from cache");
      return true;
    }
    contentfulClient
      .getEntries<EntryRepository>({
        content_type: "repository",
      })
      .then((x) => {});
  });
}
