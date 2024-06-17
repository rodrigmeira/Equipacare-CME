const swaggerAutogen = require("swagger-autogen")({
    openapi: "3.0.0",
    language: "pt-BR",
});


const outputFile = "./swagger_output.json";
const endpointsFiles = ["../src/app.js", "../src/controllers/clientController.js"];

let doc = {
    info: {
        version: "1.0.0",
        title: "API Equipacare-CME",
        description: ""
    },

    servers: [
        {
            url: "http://localhost:8080/",
            description: "Servidor localhost"
        }
    ], 

    consumes: ["application/json"],
    produces: ["application/json"],
}


swaggerAutogen(outputFile,  endpointsFiles, doc).then(()=>{
    console.log("Documentação do swagger gerada encontra-se no arquivo em: ${outputFile}");
})