const express = require('express');
const router = express.Router();
const CandidateController = require('../controllers/CandidateController');
const auth = require('../middleware/auth');
const authorize = require("../middleware/authorize");
const { upload } = require("../middleware/multerMiddleware");

// Routes pour la gestion des candidats
router.post('/addCandidat',auth, authorize(["admin"]), upload.single('file'), CandidateController.createCandidate);       
router.get('/getAllCandidats', CandidateController.getAllCandidates);        
router.get('/getCandidat/:id', CandidateController.getCandidateById);     
router.put('/updateCandidat/:id',auth, authorize(["admin"]), CandidateController.updateCandidate);      
router.delete('/deleteCandidat/:id',auth, authorize(["admin"]), CandidateController.deleteCandidate);   

module.exports = router;
