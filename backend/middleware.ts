import { type Context, type Middleware } from "@oak/oak";

export const handle500: Middleware = async (ctx: Context, next) => {
    try {
        await next();
    } catch (err) {
        console.error("Server error:", err);
        ctx.response.status = 500;
        ctx.response.body = { message: "Internal Server Error" };
    }
};

export const handle404: Middleware = (ctx: Context) => {
    ctx.response.status = 404;
    ctx.response.body = { message: "Not Found" };
};