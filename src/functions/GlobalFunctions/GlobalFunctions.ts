import { CompileTemplateEmailOptions, IFunctionsRepository } from "../../repositories/IFunctionsRepository";
import bcrypt from 'bcrypt';
import { v4 as uuid} from 'uuid';
import fs from 'fs';
import handlebars from 'handlebars';

export class GlobalFunctions implements IFunctionsRepository{

  generationCode(){
    var CodeVerification = "P";

    for(let i = 0; i < 6; i++){

      CodeVerification += Math.floor(Math.random() * 10 + 1).toString();
    }
  
    return CodeVerification;
  }

  hashValue(value?: string){
    let Hash;
    value ? Hash = bcrypt.hashSync(value, 10) : Hash = uuid();

    return Hash;
  }
  
  isNullOrWhitespace(value: string){
    return !value || !value.trim();
  }

  validateEmail(email: string){
    return ! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  }

  validateNumber(value){
    return isNaN(value);
  }

  validateFields(data){
    for(let key in data){
      if(typeof data[key] !== "boolean" && this.isNullOrWhitespace(data[key])) {return {error: true, field: key}}
    }
    return {error: false, field: null}
  }

  ReadTemplateEmail({path, params} : CompileTemplateEmailOptions) : string{
    try {
      const html = fs.readFileSync(path, 'utf8');
      const template = handlebars.compile(html);
      const templateTosend = template(params);
      return templateTosend;
    } 
    catch (error){  
      throw new Error('Falied to compile template html');
    }
  }

  getFields(data: Object): string {
    const ArrayKeys = Object.keys(data);
    let QuerryKeys = [];
    ArrayKeys.map((field) => {
      QuerryKeys.push(`${field} = ?`)
    })
    return QuerryKeys.toString();
  }

  getValues(data: Object): Array<string> {
    const ArrayValues = Object.values(data);

    return ArrayValues;
  }
}