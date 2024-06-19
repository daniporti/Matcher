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

router.post('/like', async (req, res) => {
  const { userId, likedUserId, superLike } = req.body;

  try {
    const client = await pool.connect();
    await client.query('BEGIN');

    const insertLikeQuery = `
      INSERT INTO likes (usuario_id, liked_usuario_id, super_like)
      VALUES ($1, $2, $3)
      RETURNING *`;
    const likeResult = await client.query(insertLikeQuery, [userId, likedUserId, superLike]);

    const checkMatchQuery = `
      SELECT * FROM likes
      WHERE usuario_id = $2 AND liked_usuario_id = $1`;
    const matchResult = await client.query(checkMatchQuery, [userId, likedUserId]);

    if (matchResult.rows.length > 0) {
      const insertMatchQuery = `
        INSERT INTO matches (usuario1_id, usuario2_id)
        VALUES ($1, $2)`;
      await client.query(insertMatchQuery, [userId, likedUserId]);
    }

    await client.query('COMMIT');
    res.status(200).send({ message: 'Like recorded', match: matchResult.rows.length > 0 });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error processing like', err);
    res.status(500).send({ message: 'Error processing like' });
  }
});

module.exports = router;
