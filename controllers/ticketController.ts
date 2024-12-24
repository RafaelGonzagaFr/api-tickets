import { Request, Response } from 'express'
import Ticket from '../models/Ticket'

export const getTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar tickets ' });
    }
};

export const createTicket = async (req: Request, res: Response): Promise<void> => {
    const { title, description, userId } = req.body;
    try {
        const ticket = await Ticket.create({ title, description, userId });
        res.status(201).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar ticket ' });
    }
}