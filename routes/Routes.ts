import express from "express";
import { getAllUser, login, signup } from "../controller/userController";

const router = express.Router();

// Authentication Routes
router.get("/allUsers", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

// Juices Routes
router.get("/allJuices", );
router.post("/juice", );
// Bowls Routes
router.get("/allBowls", );
router.post("/bowl", );
// Coffees Routes
router.get("/allCoffees", );
router.post("/coffee", );

export default router;