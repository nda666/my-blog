import { createClient } from "contentful";
import config from "~/config";

const contentfulClient = createClient({
  space: config.contentfulSpaceId,
  environment: config.contentfulEnvironmentId, // defaults to 'master' if not set
  accessToken: config.contentfulAccessToken,
});

export default contentfulClient;
