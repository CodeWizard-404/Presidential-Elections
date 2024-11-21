const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const auth = require('../middleware/auth');
const authorize = require("../middleware/authorize");


// Routes pour la gestion des commentaires
router.post('/addComment',auth, authorize(["admin"]), CommentController.createComment);           
router.get('/candidate/:candidateId', CommentController.getCommentsByCandidate);
router.delete('/deleteComment/:id', CommentController.deleteComment);      

module.exports = router;
