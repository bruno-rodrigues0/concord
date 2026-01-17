import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  GetAllServerMembersParams,
  GetAllServerMembersQuery,
} from "../server.schemas";

export const getAllServerMembers: Controller<{
  Params: GetAllServerMembersParams;
  Querystring: GetAllServerMembersQuery;
}> = async (request, reply) => {
  try {
    const { id } = request.params;
    const { page, limit, filter } = request.query;
    const result = await providers.serverMember.getAllMembersByServer(
      id,
      page,
      limit,
      filter,
    );

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Erro while getting records.",
        },
      });
    }

    return reply.status(StatusCodes.OK).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
