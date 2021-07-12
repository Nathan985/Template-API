export interface IBcryptRepository{
  hash: (data: string) => string;
  compare: (data: IBcryptRepositoryFunctionCompareRequest) => boolean;
}

export interface IBcryptRepositoryFunctionCompareRequest{
  passoword: string;
  hash: string;
}