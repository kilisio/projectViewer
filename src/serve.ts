import { Application } from "@oakserver/oak";

const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: __dirname,
      index: "index.html",
    });
  } catch {
    await next();
  }
});


app.listen({ port: 8080 });
