import { RequestHandler } from "express";
import { getAllBowls, postBowl } from "../service/bowlService";

export const getAllBowlsData: RequestHandler = async (req, res) => {
    try {
      const bowls = await getAllBowls();
      res.status(200).json({
        status: "success 🎉",
        data: bowls,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail 👀.",
        message: "Product did not find 📣.",
      });
    }
  };

export const postBowlData: RequestHandler = async (req, res) => {
  try {
    const productInfo = req.body;
    const result = await postBowl(productInfo);
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
