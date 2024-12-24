import User from '../models/User.js'

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuários '});
  }
};

export const createUser = async (req, res) => {
  const { userName, password, tipo } = req.body;
  try {
    const user = await User.create({ userName, password, tipo });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário '});
  }
}