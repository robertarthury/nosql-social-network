const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById, 
    removeThought,
    addThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(addThought);


// /api/thoughts/:id
router
.route('/:id')
.get(getThoughtById)
.delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);


module.exports = router;
