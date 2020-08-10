export interface FruitModel {
  name: string;
  weight: number;
  image: string;
};

export interface FruitPropsModel {
  key: string;
  fruit: FruitModel;
};
