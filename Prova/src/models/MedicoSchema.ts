import {model, Schema} from "mongoose";

const medicoSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O Campo NOME é Obrigatório!"],
        },

        crm: {
            type: String,
            required: ["O Campo CRM é Obrigatório"],
            unique: true
        },

        especialidade: {
            type: String,
            required: ["O Campo ESPECIALIDADE é Obrigatório!"],
        },

        criadoEm: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

export default model("medicos", medicoSchema);