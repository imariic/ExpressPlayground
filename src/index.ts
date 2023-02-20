import Application from "./application";

const server = Application.getInstance();

server.listen(3000, () => {
  console.log("Server is listening...");
});
