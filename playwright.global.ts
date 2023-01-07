import type { FullConfig } from "@playwright/test";

import dotenv from "dotenv";

async function globalSetup(config: FullConfig) {
  dotenv.config();
}

export default globalSetup;
