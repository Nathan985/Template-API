import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  
  constructor(
    private CreateUserUseCase: CreateUserUseCase
  ){}

  async handle(Request: Request, Response: Response){
    const { email, name, password } = Request.body;
    try {
      const user = await this.CreateUserUseCase.execute({
        email,
        name,
        password
      })
      Response.status(200)
      return Response.send({
        success: 1,
        message: "Create User with Sucessfully!",
        data: user
      })
    } 
    catch (error) {
      Response.status(500)
      return Response.send({
        success: 0,
        message: error.message
      })
    } 
  }

}