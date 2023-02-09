import mongoose from "mongoose";
import validator from "validator";

export const bowlsSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: [true, "Please provide Bowl Name"],
    },
    price: {
        type: Number,
        required: [true, "Please provide Bowl Price"],
    },
    imgUrl: {
        type: String,
        validator: (value: string) => validator.isURL(value),
    },
    description: {
        type: String,
        required: [true, "Please provide Bowl Description"],
    }
});

const Bowls = mongoose.model("bowl", bowlsSchema);

export default Bowls;