import Coffees from "../model/coffeeModel";

interface ProductData {
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

export const postCoffee = async (productInfo: ProductData) => {
  const result = await Coffees.create(productInfo);
  return result;
};

export const getAllCoffees = async () => {
  const result = await Coffees.find({});
  return result;
};
