import mongoose from "mongoose";

const listSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});
const listModel = mongoose.model('list', listSchema);

export default listModel;