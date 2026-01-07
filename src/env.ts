import dotenv from "dotenv";

const env: string = process.env.NODE_ENV || "dev";

dotenv.config({
  path: [`.env.${env}`, ".env"],
});
