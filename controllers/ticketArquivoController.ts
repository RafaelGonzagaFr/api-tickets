import Evt_Arq from "../models/Evt_Arq"
import { Request, Response } from 'express'
import Tkt_Arq from "../models/Tkt_Arq";

export const getTktArq = async (req: Request, res: Response): Promise<void>  => {
    try {
      const tktArq = await Tkt_Arq.findAll();
      res.status(200).json(tktArq);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar arquivo e evento' });
    }
};

export const createTktArq = async (req: Request, res: Response): Promise<void> => {
  const { arq_id, tkt_id }  = req.body;

  try {
      const tktArq = await Tkt_Arq.create({ arq_id, tkt_id });
      res.status(201).json(tktArq);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar relacionamento entre arquivo e evento' });
  }
}
