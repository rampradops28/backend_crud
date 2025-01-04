import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true // this data must contains in all object
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

export default mongoose.model('users', userSchema)