const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const readAll = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })

  res.status(200).json(workouts)
}

// get a single workout
const readId = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No workout found' })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({ error: 'No workout found' })
  }

  res.status(200).json(workout)
}

// create a workout
const create = async (req, res) => {
  const { title, load, reps } = req.body

  // check fields & handle errors
  const emptyFields = []
  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteId = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No workout found' })
  }

  const workout = await Workout.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(404).json({ error: 'No workout found' })
  }

  res.status(200).json(workout)
}


// update a workout
const updateId = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No workout found' })
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!workout) {
    return res.status(404).json({ error: 'No workout found' })
  }

  res.status(200).json(workout)
}


module.exports = {
  create,
  readAll,
  readId,
  deleteId,
  updateId
}