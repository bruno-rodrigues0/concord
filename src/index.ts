import { app } from "@/app/server";
import "@/env";

const port = Number(process.env.PORT) || 3001;
const host = process.env.HOST;

try {
  app.listen({ port, host: host }, () => {
    app.log.info("OK");
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
