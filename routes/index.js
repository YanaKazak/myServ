const express = require('express');
const router = express.Router();
const Models = require('../models/index');


router.get('/get-by-name', async (req, res, next) => {
  try {
    const user = await Models.test.findOne({ where:
          { first_name: req.query.first_name,
            last_name: req.query.last_name
          }});
    if (!user) {
      return next ('User not found')
    }
    res.json({
      message: 'success',
      data: new Date(),
      ...user.dataValues,
    })

  } catch (err) {
    next(err);
  }
});

router.get('/get-by-id', async (req, res, next) => {
  try {
    const user = await Models.test.findOne({ where: { id: req.query.id }});
    if (!user) {
      return next ('User not found')
    }
    res.json({
      message: 'success',
      data: new Date(),
      ...user.dataValues,
    })

  } catch (err) {
    next(err);
  }
});

router.post('/user', async (req, res, next) => {
  try {
    const data = req.query;
    console.log(data);
    const user = await Models.test.create({
      first_name: data.firstname,
      last_name: data.lastname
    });
    res.json({
      message: 'success',
      data: new Date(),
      ...user.dataValues,
    })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
