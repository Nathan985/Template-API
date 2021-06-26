import { Router } from "express";

const router = Router();

// Rotas da API

router.get('/initialRoute', (req, res) => {
  res.status(200);
  return res.send({
    success: 1,
    message: 'Default Route!'
  })
})

export { router };