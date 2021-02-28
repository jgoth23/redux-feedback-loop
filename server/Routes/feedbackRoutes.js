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
  console.log('checking status', req.body);
  const feedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;

  pool.query(sqlText, [feedback.todaysFeeling, feedback.understanding, feedback.supported, feedback.comments])
  .then((result) => {
      res.sendStatus(201);
  })
  .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
  });
});

module.exports = router;
