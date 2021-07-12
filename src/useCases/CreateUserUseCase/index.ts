import { ConnectionRepository } from '../../repositories/ConnectionRepostiroy/ConnectionRepository';

import { GlobalFunctions } from '../../functions/GlobalFunctions/GlobalFunctions';

import { CreateUserUseCase } from './CreateUserUseCase' ;
import { CreateUserController } from './CreateUserController' ;

const globalFunctions = new GlobalFunctions();

const connectionRepository = new ConnectionRepository();

const createUserUseCase = new CreateUserUseCase(
  globalFunctions,
  connectionRepository
);

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController };