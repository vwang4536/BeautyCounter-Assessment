import { FruitModel } from './FruitDisplay.models';

export interface FruitResponseModel {
  data: FruitModel[];
};

export interface MainContainerStateModel {
  fruits: FruitModel[];
  displayError: boolean;
  errorText: string;
};