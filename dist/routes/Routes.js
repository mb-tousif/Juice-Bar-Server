"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
// Authentication Routes
router.get("/allUsers", userController_1.getAllUser);
router.post("/signup", userController_1.signup);
router.post("/login", userController_1.login);
exports.default = router;
//# sourceMappingURL=Routes.js.map