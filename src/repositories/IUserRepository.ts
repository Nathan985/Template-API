import { Repository } from "typeorm";
import { User } from '../entities/User';

export interface IUserRepository extends Repository<User> {

};