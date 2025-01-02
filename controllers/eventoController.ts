import Evento from "../models/Evento"
import { Request, Response } from 'express'

export const getEventos = async (req: Request, res: Response): Promise<void>  => {
    try {
      const eventos = await Evento.findAll();
      res.status(200).json(eventos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar grupos '});
    }
};

export const createEvento = async (req: Request, res: Response): Promise<void> => {
  const { descricao, tipo, data, user_id_dst, ticketId }  = req.body;

  try {
      const evento = await Evento.create({ descricao, tipo, data, user_id_dst, ticketId });
      res.status(201).json(evento);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar grupo' });
  }
}

export const getEventoById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const evento = await Evento.findByPk(id);
    res.status(200).json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar grupo '});
  }
}
