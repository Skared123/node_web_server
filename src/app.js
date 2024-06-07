import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    port: envs.PORT,
    public: envs.PUBLIC_PATH,
  });
};

//Funcion agnostica autoconvocada
//Agnostica porque no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis
(async () => {
  main();
})();
