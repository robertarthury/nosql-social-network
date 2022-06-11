const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById, 
    removeThought,
    addThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
// retrive all thoughts
router
.route('/thoughts')
.get(getAllThoughts)

router
.route(':userId')
.post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(addReaction)
.delete(removeThought);

// delete reaction
router
.route('/:userId/:thoughtId/:reactionId')
.delete(removeReaction)

module.exports = router;