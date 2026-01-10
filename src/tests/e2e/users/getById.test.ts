import { describe, beforeAll, afterAll, it, expect } from "bun:test";
import { app } from "../../../app/server";
import { StatusCodes } from "http-status-codes";

describe("Users - getById", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("Get user by id", async () => {
    const reply = await app.inject({
      method: "GET",
      url: "/users/",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI3ZDgwZmE1Ni0xMDU4LTRiNjQtOWIxOS1mNjkyMDBlYzE1OTUiLCJlbWFpbCI6ImJydW5vQGdtYWlsLmNvbSIsImlhdCI6MTc2ODA2MjM3MywiZXhwIjoxNzY4NjY3MTczfQ.4jZ7PtEiTw73XCsk4376xKWAkcJp7MfsVci-EYNEAoI",
      },
    });

    expect(reply.statusCode).toBe(StatusCodes.OK);
  });
});
