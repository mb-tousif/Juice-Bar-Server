import mongoose from "mongoose";
import validator from "validator";

export const coffeeSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: [true, "Please provide Coffee Name"],
    },
    price: {
        type: Number,
        required: [true, "Please provide Coffee Price"],
    },
    imgUrl: {
        type: String,
        validator: (value: string) => validator.isURL(value),
    },
    description: {
        type: String,
        required: [true, "Please provide Coffee Description"],
    }
});

const Coffees = mongoose.model("coffee", coffeeSchema);

export default Coffees;