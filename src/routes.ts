import { Router } from "express";
import { createUserController } from "./useCases/CreateUserUseCase";

const router = Router();

// Rotas da API

router.post('/createUser', (req, res) => {
 return createUserController.handle(req, res)
})

router.get('/initialRoute', (req, res) => {
  res.status(200);
  return res.send({
    success: 1,
    message: 'Default Route!'
  })
})

export { router };