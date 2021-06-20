import {Request, Response} from "express";
import { mongoose } from "../config/database";
import MedicoSchema from "../models/MedicoSchema";

class MedicoController {
    async cadastrar (request: Request, response: Response) {
        try {
            const novoMedico = await MedicoSchema.create(request.body);
            response.status(201).json({
                objeto: novoMedico,
                msg: "Médico Cadastrado Com Sucesso",
                erro: false
            });
        } catch (error){
            response.status(400).json({
                objeto: error,
                msg: "Erro Ao Cadastrar o Médico!",
                erro: true
            });
        }
    }

    async buscarPorCrm(request: Request, response: Response) {
        const {crm} = request.params;
        const medicos = await MedicoSchema.find({crm: crm});
        response.status(200).json(medicos);
    }

    async listar(request: Request, response: Response) {
        const medicos = await MedicoSchema.find();
        response.status(200).json(medicos);
    }

    async alterar (request: Request, response: Response) {
        const {crm} = request.params;
        const medicos = await MedicoSchema.updateOne(request.body);
        response.status(200).json(medicos);
    }

    async deletar (request: Request, response: Response) {
        await MedicoSchema.deleteOne({crm: request.params.crm });
        var result = await MedicoSchema.findOne({});
        response.status(200).json(result);
    }
}

export {MedicoController};