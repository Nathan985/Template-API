import {GlobalFunctions} from './GlobalFunctions';
import faker from 'faker';

describe('Handling Function Validations', () => {
  const FunctionsSystem = new GlobalFunctions();

  it('Email Syntax Test', () => {
    const email = faker.internet.email();

    const response = FunctionsSystem.validateEmail(email);

    expect(response).toEqual(false);
  })

  it('Invalid email syntax test', () => {
    const email = "emailinvalido";

    const response = FunctionsSystem.validateEmail(email);

    expect(response).toEqual(true);
  })

  it('Random Code Generation Test', () => {

    const response = FunctionsSystem.generationCode();

    expect(typeof response === 'string').toEqual(true);
  })

  it('Encryption Test', () => {

    const response = FunctionsSystem.hashValue();

    expect(typeof response === 'string').toEqual(true);
  })

  it('Encryption Test', () => {

    const response = FunctionsSystem.hashValue('123456789') as string;

    expect(response.length).toEqual(60);
  })

  it('String Test on null or with empty space', () => {

    const response = FunctionsSystem.isNullOrWhitespace("Teste");

    expect(response).toEqual(false);
  })

  it('String Test on null or with empty space', () => {

    const response = FunctionsSystem.isNullOrWhitespace(" ");

    expect(response).toEqual(true);
  })

  it('Number validation test', () => {

    const response = FunctionsSystem.validateNumber(faker.datatype.number(10));

    expect(response).toEqual(false);
  })

  it('Number validation test', () => {

    const response = FunctionsSystem.validateNumber("invalid");

    expect(response).toEqual(true);
  })

  it('Validation test of large numbers of fields', () => {

    const fields = {
      email: 'no-reply@gmail.com',
      password: '123456789',
      name: 'Teste'
    }

    const response = FunctionsSystem.validateFields(fields);

    expect(response).toStrictEqual({error: false, field: null});
  })

  it('Validation test of large numbers of fields', () => {

    const fields = {
      email: ' ',
      password: '123456789',
      name: 'Teste'
    }

    const response = FunctionsSystem.validateFields(fields);

    expect(response).toStrictEqual({error: true, field: 'email'});
  })

  it('Return validation of fields prepared for Mysql function', () => {
    const data = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      password: faker.internet.password()
    }
    const response = FunctionsSystem.getFields(data);
    
    expect(response).toBe("email = ?,name = ?,password = ?");
  })

  it('Validation of return values prepared for Mysql function', () => {
    const data = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      password: faker.internet.password()
    }
    const response = FunctionsSystem.getValues(data);

    expect(response).toStrictEqual([data.email, data.name, data.password]);
  })

  it('Validating the html template reader function', () => {
    const response = FunctionsSystem.ReadTemplateEmail({
      path: __dirname + "/../../templates/Template_Email_PRMA.html",
      params: {}
    })
    expect(typeof response === 'string').toEqual(true);
  })

  it('Validating html template reader function with invalid path', () => {
    try{
      FunctionsSystem.ReadTemplateEmail({
        path: __dirname + "/../Template_Email_PRMA.html",
        params: {}
      })
    }
    catch (error){   
      expect(error.message).toBe("Falied to compile template html");
    }
  })

})