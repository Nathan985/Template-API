import bcrypt from 'bcrypt'
import { IBcryptRepository, IBcryptRepositoryFunctionCompareRequest } from '../IBcryptRepository';

export class BcryptRepository implements IBcryptRepository{

  hash(data: string): string {
    const HashData = bcrypt.hashSync(data, 10);
    return HashData;
  }

  compare(data: IBcryptRepositoryFunctionCompareRequest) : boolean{
    const isEqual = bcrypt.compareSync(data.passoword, data.hash);
    return isEqual;
  }

}