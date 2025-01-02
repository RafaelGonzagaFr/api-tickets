import Equipe from "../models/Equipe"
import { Request, Response } from 'express'

export const getEquipe = async (req: Request, res: Response): Promise<void>  => {
    try {
      const equipes = await Equipe.findAll();
      res.status(200).json(equipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar grupos '});
    }
};

export const createEquipe = async (req: Request, res: Response): Promise<void> => {
  const { nome, status }  = req.body;

  try {
      const equipe = await Equipe.create({ nome, status });
      res.status(201).json(equipe);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar grupo' });
  }
}

export const getEquipeById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const equipe = await Equipe.findByPk(id);
    res.status(200).json(equipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar grupo '});
  }
}
