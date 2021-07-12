import { Repository } from 'typeorm';
import { User } from '../../entities/User';
import { ConnectionRepository } from '../ConnectionRepostiroy/ConnectionRepository';

import { IUserRepository } from '../IUserRepository';

export class UserRepository extends Repository<User> implements IUserRepository{

}