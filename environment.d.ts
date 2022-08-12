declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      GITHUB_USERNAME: string;
      GITHUB_TOKEN: string;
      SESSION_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
