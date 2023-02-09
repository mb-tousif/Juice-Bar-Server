import Bowls from "../model/bowlsModel";

interface ProductData {
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

export const postBowl = async (productInfo: ProductData) => {
  const result = await Bowls.create(productInfo);
  return result;
};

export const getAllBowls = async () => {
  const result = await Bowls.find({});
  return result;
};
