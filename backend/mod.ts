import { Application } from "@oak/oak";
import router from "./routes.ts";
import { handle500, handle404 } from "./middleware.ts";

const app = new Application();

app.use(handle500);

app.use(async (ctx, next) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST");
    await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(handle404);

console.log("Server running on http://localhost:8000");
app.listen({ port: 8000 });