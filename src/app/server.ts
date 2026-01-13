import { fastify } from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { registerSwagger } from "@/app/plugins/swagger";
import { registerCors } from "@/app/plugins/cors";
import { registerScalar } from "@/app/plugins/scalar";
import { loggerConfig } from "@/app/config/logger";
import { registerRoutes } from "@/app/plugins/routes";
import { registerWebsocket } from "@/app/plugins/websocket";
import { registerCookie } from "./plugins/cookie";

export const app = fastify({
  logger: {
    ...loggerConfig,
  },
}).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

await registerSwagger(app);
await registerCors(app);
await registerScalar(app);
await registerRoutes(app);
await registerWebsocket(app);
await registerCookie(app);
