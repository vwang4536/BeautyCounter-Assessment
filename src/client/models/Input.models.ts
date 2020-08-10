import { FruitResponseModel } from './MainContainer.models';

export interface InputStateModel {
  inputText: string;
};

export interface InputPropsModel {
  getFruit: (name: string) => Promise<FruitResponseModel[] | string>;
};