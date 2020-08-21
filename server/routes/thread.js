const express             = require('express');
const router              = express.Router();
const result              = require('../aqiCalculation/index')
var async                 = require('async');
const Thread              = require('../models/Thread');
const ValidThreadInputs   = require('../validation/thread');

router.post('/createThreads', (req, res) => {
  const { errors, isValid } = ValidThreadInputs(req.body);
  if(!isValid) {
      return res.status(400).json(errors);
  }
  const newThread = new Thread({
      pName     : req.body.pName,
      pValue    : req.body.pValue,
      cName     : req.body.cName,
      cEmailId  : req.body.cEmailId
  });
   newThread.save().then(thread => {
    result.AQICalculator.getAQIResult(req.body.pName, req.body.pValue).then((result) => {
        res.json(result)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {console.log(err)})
})

module.exports = router;
