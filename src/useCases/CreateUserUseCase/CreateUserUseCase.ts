import { User } from '../../entities/User';
import { GlobalFunctions } from '../../functions/GlobalFunctions/GlobalFunctions';
import { ConnectionRepository } from '../../repositories/ConnectionRepostiroy/ConnectionRepository';
import { IUserRepository } from '../../repositories/IUserRepository';
import { CreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  
  private UserRepository: IUserRepository
  constructor(
    private SystemFunctions: GlobalFunctions,
    private ConnectionRepository: ConnectionRepository
  ){}

  async execute(data: CreateUserDTO){
    await this.ConnectionRepository.openConnection();
    this.UserRepository = this.ConnectionRepository.Connection.getRepository(User);
    const isValidFields = this.SystemFunctions.validateFields(data);
    if(isValidFields.error){
      throw new Error(`Invalid field ${isValidFields.field}`);
    }

    const isValidEmailFormat = this.SystemFunctions.validateEmail(data.email);
    if(isValidEmailFormat){
      throw new Error(`Invalid Email`);
    }

    const {email, name, password} = data;

    const user = this.UserRepository.create({
      email,
      name,
      password: this.SystemFunctions.hashValue(password)
    })

    this.UserRepository.save(user);

    return user;
  }

}