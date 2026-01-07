import { fastify } from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { registerSwagger } from "./plugins/swagger";
import { registerCors } from "./plugins/cors";
import { registerScalar } from "./plugins/scalar";
import { loggerConfig } from "./config/logger";
import { registerRoutes } from "./plugins/routes";

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
