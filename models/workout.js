const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
exercises:[{
name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
},
type: {
    type: String,
    required:"Enter what type of workout"
},
weight:{
    type: Number
},
sets:{
    type: Number
},
reps:{
    type: Number
},
duration:{
    type: Number
},
distance:{
    type: Number
}
}],
date: {
    type: Date,
    default:Date.now
}
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;