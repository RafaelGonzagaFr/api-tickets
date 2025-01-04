import { Request, Response } from 'express'
import Ticket from '../models/Ticket'
import { sequelize } from '../database/db';
import { QueryTypes } from 'sequelize';

export const getTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar tickets ' });
    }
};

export const getTicketsByUser = async (req: Request, res: Response): Promise<void> => {
    const UserId = req.params.id;
    try {
        const tickets = await Ticket.findAll({
            where: {
                UserId: UserId,
            }
        })
        res.status(200).json(tickets);
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Erro ao achar tickets' });
    }
}

export const getTicketsByEquipe = async (req: Request, res: Response): Promise<void> => {
    const EquipeId = req.params.id;
    try {
        const tickets = await Ticket.findAll({
            where: {
                equipeId: EquipeId,
            }
        })
        res.status(200).json(tickets);
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Erro ao achar tickets' });
    }
}

export const createTicket = async (req: Request, res: Response): Promise<void> => {
    const { title, description, UserId } = req.body;
    try {
        const ticket = await Ticket.create({ title, description, UserId });
        res.status(201).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar ticket' });
    }
}