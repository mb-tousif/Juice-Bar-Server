import Juices from "../model/juiceModel";

interface ProductData {
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

export const postJuice = async (productInfo: ProductData) => {
  const result = await Juices.create(productInfo);
  return result;
};

export const getAllJuices = async () => {
  const result = await Juices.find({});
  return result;
};
