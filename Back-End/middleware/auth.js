const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const authHeader = req.header('Authorization');
  

  if (!authHeader) {
    return res.status(401).send({ message: 'No token provided.' });
  
  }

  // Remove  from the token string
  const token = authHeader.replace('Bearer ', '');
  
  try {
    // Verify the token
    const verified = jwt.verify(token, '123456789'); 
    req.user = verified; 
    next(); 
  } catch (err) {

    res.status(400).send({ message: 'Invalid Token' + err });
  }
};
