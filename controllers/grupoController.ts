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

export const createGrupo = async (req: Request, res: Response): Promise<void> => {
  const { nome, unidadeId }  = req.body;

  try {
      const grupo = await Grupo.create({ nome, unidadeId });
      res.status(201).json(grupo);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar grupo' });
  }
}

export const getGrupoById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const grupo = await Grupo.findByPk(id);
    res.status(200).json(grupo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar grupo '});
  }
}

export const updateGrupo = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const grupo = await Grupo.findByPk(id);
    grupo?.update({ nome: req.body.nome, status: req.body.status });
    grupo?.save();
    res.status(201).json(grupo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao modificar grupo '});
  }
}