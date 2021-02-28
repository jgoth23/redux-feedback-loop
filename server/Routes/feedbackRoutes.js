const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM "feedback";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /api/feedback', error);
      res.sendStatus(500);  
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const newStudent = req.body.github_name;
  const sqlText = `INSERT INTO feedback (todaysFeeling, understanding, supported, comments) VALUES ($1), ($2), ($3), ($4)`;

  pool.query(sqlText, [feedback])
  .then((result) => {
      res.sendStatus(201);
  })
  .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
  });
});

module.exports = router;
