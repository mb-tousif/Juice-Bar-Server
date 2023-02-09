import { RequestHandler } from "express";
import { getAllCoffees, postCoffee } from "../service/coffeeService";


export const getAllCoffeesData: RequestHandler = async (req, res) => {
    try {
      const coffees = await getAllCoffees();
      res.status(200).json({
        status: "success 🎉",
        data: coffees,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail 👀.",
        message: "Product did not find 📣.",
      });
    }
  };

export const postCoffeeData: RequestHandler = async (req, res) => {
  try {
    const productInfo = req.body;
    const result = await postCoffee(productInfo);
    await result.save();
    res.status(200).json({
      status: "success 🎉",
      message: "Product saved successfully in database 📣.",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail 👀.",
      message: "Product did not save save 📣.",
    });
  }
};