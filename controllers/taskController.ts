import Task from "../models/Task"
import { Request, Response } from 'express'

export const getTasks = async (req: Request, res: Response): Promise<void>  => {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar tasks '});
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { titulo, descricao, data }  = req.body;

  try {
      const task = await Task.create({ titulo, descricao, data });
      res.status(201).json(task);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar task' });
  }
}

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const task = await Task.findByPk(id);
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar task '});
  }
}
