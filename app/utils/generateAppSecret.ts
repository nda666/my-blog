import * as fs from "fs";
import * as os from "os";
import * as crypto from "crypto";
import bcrypt from "bcryptjs";

const key = `SESSION_SECRET`;
export function runGenerateAppSecret() {
  // read file from hdd & split if from a linebreak to a array
  const ENV_VARS = fs.readFileSync("./.env", "utf8").split(os.EOL);

  if (typeof ENV_VARS === "undefined") {
    console.error("No .env file found!");
    return false;
  }

  const indexOf = ENV_VARS?.find((line) => {
    return line.match(new RegExp(key));
  });

  const value = bcrypt.hashSync(crypto.randomBytes(20).toString("hex"));

  if (indexOf) {
    // find the env we want based on the key
    const target = ENV_VARS.indexOf(indexOf!);

    // replace the key/value with the new value
    ENV_VARS.splice(target, 1, `${key}=${value}`);
  } else {
    // create new if env not found
    ENV_VARS.push(`${key}=${value}`);
  }
  // write everything back to the file system
  fs.writeFileSync("./.env", ENV_VARS.join(os.EOL));
  console.info("\x1b[32m", "🔐 Generate app secret successfuly");
}

runGenerateAppSecret();
