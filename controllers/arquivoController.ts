import Arquivo from "../models/Arquivo"
import { Request, Response } from 'express'

export const getArquivo = async (req: Request, res: Response): Promise<void>  => {
    try {
      const eventos = await Arquivo.findAll();
      res.status(200).json(eventos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar grupos '});
    }
};

export const createArquivo = async (req: Request, res: Response): Promise<void> => {
  const { descricao, extensao, metadata, data, username }  = req.body;

  try {
      const arquivo = await Arquivo.create({ descricao, extensao, metadata, data, username });
      res.status(201).json(arquivo);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar grupo' });
  }
}

export const getArquivoById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const arquivo = await Arquivo.findByPk(id);
    res.status(200).json(arquivo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar grupo '});
  }
}
