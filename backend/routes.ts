import { Router } from "@oak/oak";

const router = new Router();

let count = 0;

router.get("/count", (ctx) => {
    console.log("[SERVER] showing count");
    ctx.response.body = { count };
});

router.post("/count/increment", (ctx) => {
    console.log("[SERVER] incrementing count");
    count++;
    ctx.response.body = { count };
});

router.post("/count/decrement", (ctx) => {
    console.log("[SERVER] decrementing count");
    count--;
    ctx.response.body = { count };
});

export default router;