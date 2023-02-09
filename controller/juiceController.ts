import { RequestHandler } from "express";
import { getAllJuices, postJuice } from "../service/juiceService";

export const getAllJuicesData: RequestHandler = async (req, res) => {
    try {
      const juices = await getAllJuices();
      res.status(200).json({
        status: "success 🎉",
        data: juices,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail 👀.",
        message: "Product did not find 📣.",
      });
    }
  };

export const postJuiceData: RequestHandler = async (req, res) => {
  try {
    const productInfo = req.body;
    const result = await postJuice(productInfo);
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