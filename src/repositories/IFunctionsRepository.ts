export interface IFunctionsRepository {
  validateFields: (data: any) => {
    error: boolean;
    field: string;
  };
  validateEmail: (email: string) => boolean;
  validateNumber: (value: number) => boolean;
  isNullOrWhitespace: (value: string) => boolean;
  hashValue: (value?: any) => string; 
  generationCode: () => string;
  ReadTemplateEmail: ({path, params} : CompileTemplateEmailOptions) => string;
  getFields: (data: Object) => string;
  getValues: (data: Object) => Array<string>;
}

export interface CompileTemplateEmailOptions{
  path: string;
  params: object;
}