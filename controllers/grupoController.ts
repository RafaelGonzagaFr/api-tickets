import Grupo from "../models/Grupo"
import { Request, Response } from 'express'

export const getGrupos = async (req: Request, res: Response): Promise<void>  => {
    try {
      const grupos = await Grupo.findAll();
      res.status(200).json(grupos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar grupos '});
    }
};