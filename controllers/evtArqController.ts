import Evt_Arq from "../models/Evt_Arq"
import { Request, Response } from 'express'

export const getEvtArq = async (req: Request, res: Response): Promise<void>  => {
    try {
      const evtArq = await Evt_Arq.findAll();
      res.status(200).json(evtArq);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar arquivo e evento' });
    }
};

export const createEvtArq = async (req: Request, res: Response): Promise<void> => {
  const { arq_id, evt_id }  = req.body;

  try {
      const evtArq = await Evt_Arq.create({ arq_id, evt_id });
      res.status(201).json(evtArq);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar relacionamento entre arquivo e evento' });
  }
}
