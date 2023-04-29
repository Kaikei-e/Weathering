import { rest } from "msw";

export const handlers = [
  rest.get("/api/system/ping", (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(JSON.stringify({ message: "pong" })));
  }),
];
