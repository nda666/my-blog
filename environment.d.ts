declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      GITHUB_USERNAME: string;
      GITHUB_TOPIC: string | undefined;
      GITHUB_TOKEN: string;
      SESSION_SECRET: string;
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ENVIRONMENT_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
      SENTRY_DSN: string;
      SOCIAL_EMAIL: string;
      SOCIAL_TWITTER_USERNAME: string;
      SOCIAL_INSTAGRAM_USERNAME: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
