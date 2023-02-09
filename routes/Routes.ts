import express from "express";
import { getAllUser, login, signup } from "../controller/userController";
import { getAllBowlsData, postBowlData } from "../controller/bowlController";
import { getAllCoffeesData, postCoffeeData } from "../controller/coffeeController";
import { getAllJuicesData, postJuiceData } from "../controller/juiceController";

const router = express.Router();

// Authentication Routes
router.get("/allUsers", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

// Juices Routes
router.get("/allJuices", getAllJuicesData);
router.post("/juice", postJuiceData);
// Bowls Routes
router.get("/allBowls", getAllBowlsData);
router.post("/bowl", postBowlData);
// Coffees Routes
router.get("/allCoffees", getAllCoffeesData);
router.post("/coffee", postCoffeeData);

export default router;