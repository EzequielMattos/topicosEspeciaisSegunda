import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://topicos:topicos@prova.uh6qk.mongodb.net/Prova?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true }
    )

    .then(() => {
        console.log("Aplicação Conectada Ao Banco De Dados!");
    })
    .catch((error) => {
        console.log("Erro Ao Conectar Ao Banco De Dados!");
    })
export {mongoose};