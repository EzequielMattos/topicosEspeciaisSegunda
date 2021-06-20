import {Router} from "express";
import {MedicoController} from "../controllers/medicoController";

const router = Router();
const medicoController = new MedicoController();

router.post("/medico/cadastrar", medicoController.cadastrar);
router.get("/medico/listar", medicoController.listar);
router.get("/medico/buscar/:crm", medicoController.buscarPorCrm);
router.delete("/medico/remover/:crm", medicoController.deletar);
router.post("/medico/alterar", medicoController.alterar);

export { router };