const express = require('express')
const { create, readAll, readId, deleteId, updateId } = require('../controllers/workoutController')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all workouts
router.get('/', readAll)

// GET a single workout
router.get('/:id', readId)

// POST a new workout
router.post('/', create)

// DELETE a new workout
router.delete('/:id', deleteId)

// UPDATE a new workout
router.patch('/:id', updateId)

module.exports = router