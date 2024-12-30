import Ticket_User from "../models/User_Tkt"
import { Request, Response } from 'express'


export const getRelationships = async (req: Request, res: Response): Promise<void> => {
  try {
    const relationships = await Ticket_User.findAll();
    res.status(200).json(relationships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar Ticket_Users '});
  }
}

export const createRelationship = async (req: Request, res: Response): Promise<void> => {
  try {
    const UserId = req.body.user_id;
    const TicketId = req.body.ticket_id;
    const ticket_user_tp = req.body.ticket_user_tp;
    const relationship = await Ticket_User.create({ ticket_user_tp, UserId, TicketId });
    res.status(201).json(relationship);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar ticket' })
  }
}