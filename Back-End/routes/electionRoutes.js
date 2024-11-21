const express = require('express');
const router = express.Router();
const ElectionController = require('../controllers/ElectionController');
const auth = require('../middleware/auth');
const authorize = require("../middleware/authorize");


// Routes pour la gestion des élections
router.post('/addElection',auth, authorize(["admin"]), ElectionController.createElection);         
router.get('/getElections',auth, authorize(["admin"]), ElectionController.getAllElections);         
router.get('/getElection/:id',auth, authorize(["admin"]), ElectionController.getElectionById);      
router.put('/updateElection/:id',auth, authorize(["admin"]), ElectionController.updateElection);       
router.delete('/deleteElection/:id',auth, authorize(["admin"]), ElectionController.deleteElection);   

module.exports = router;
