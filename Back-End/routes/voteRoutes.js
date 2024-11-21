const express = require('express');
const router = express.Router();
const VoteController = require('../controllers/VoteController');
const auth = require('../middleware/auth');


// Routes pour la gestion des votes
router.post('/castVote',auth, VoteController.castVote);                 
router.get('/election/:electionId', VoteController.getVotesByElection); 
router.get('/candidate/:candidateId', VoteController.getVotesByCandidate); 

module.exports = router;
