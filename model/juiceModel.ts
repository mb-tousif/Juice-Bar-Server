import mongoose from "mongoose";
import validator from "validator";

export const juiceSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: [true, "Please provide Juice Name"],
    },
    price: {
        type: Number,
        required: [true, "Please provide Juice Price"],
    },
    imgUrl: {
        type: String,
        validator: (value: string) => validator.isURL(value),
    },
    description: {
        type: String,
        required: [true, "Please provide Juice Description"],
    }
});

const Juices = mongoose.model("juice", juiceSchema);

export default Juices;