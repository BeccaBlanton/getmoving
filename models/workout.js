const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
exercises:[{
type: {
    type: String,
    required:"Enter what type of workout"
},
name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
},
duration:{
    type: Number
},
weight:{
    type: Number
},
reps:{
    type: Number
},
sets:{
    type: Number
},
distance:{
    type: Number
}
}],
day: {
    type: Date,
    default:Date.now
}
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;