
import { Request, Response } from 'express'
import User from '../models/User'
import sequelize, { Sequelize } from 'sequelize/lib/sequelize';

export const getUsers = async (req: Request, res: Response): Promise<void>  => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários '});
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuário '});
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { userName, password, tipo } = req.body;
  try {
    const user = await User.create({ userName, password, tipo });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário '});
  }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    user?.update({ userName: req.body.userName , password: req.body.password, tipo: req. body.tipo });
    user?.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao modificar usuário '});
  }
}