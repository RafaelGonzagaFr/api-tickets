
import { Request, Response } from 'express'
import User_Eq from "../models/User_Eq";

export const getUserEq = async (req: Request, res: Response): Promise<void>  => {
    try {
      const UserEq = await User_Eq.findAll();
      res.status(200).json(UserEq);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar relação Usuário - Equipamento' });
    }
};

export const createUserEq = async (req: Request, res: Response): Promise<void> => {
  const { user_id, equipe_id }  = req.body;

  try {
      const UserEq = await User_Eq.create({ user_id, equipe_id });
      res.status(201).json(UserEq);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar relacionamento entre Usuário - Equipamento' });
  }
}
