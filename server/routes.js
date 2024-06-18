const express = require('express');
const pool = require('./database');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, senha, nome, sobrenome, data_nascimento, sexo } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO usuarios (email, senha, nome, sobrenome, data_nascimento, sexo)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [email, senha, nome, sobrenome, data_nascimento, sexo]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
