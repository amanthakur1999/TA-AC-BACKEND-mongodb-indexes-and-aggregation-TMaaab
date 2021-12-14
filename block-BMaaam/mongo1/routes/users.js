var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/active', function (req, res, next) {
  // res.send('respond with a resource');
  User.aggregate(
    [
      {
        $match: {
          eyeColor: 'blue',
          gender: 'male',
          'company.location.country': 'USA',
        },
      },
    ],
    (err, users) => {
      if (err) return next(err);
      res.render('user', { users });
    }
  );

  // User.aggregate(
  //   [
  //     {
  //       $group: {
  //         _id: '$gender',
  //         count: { $sum: 1 },
  //       },
  //     },
  //   ],
  //   (err, users) => {
  //     if (err) return next(err);
  //     res.render('user', { users });
  //   }
  // );
});

module.exports = router;
