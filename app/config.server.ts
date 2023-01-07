const config = {
  appName: process.env.APP_NAME || "My Blog",
  githubUsername: process.env.GITHUB_USERNAME || "",
  githubToken: process.env.GITHUB_TOKEN || "",
  githubTopic: process.env.GITHUB_TOPIC || undefined,
  sessionSecret: process.env.SESSION_SECRET || "",
  contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID || "",
  contentfulEnvironmentId: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
  contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  sentryDsn: process.env.SENTRY_DSN || "",
};

export default config;
