export { default } from './App.vue';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/preferences', async (req, res) => {
  const { userId, preferences } = req.body;

  try {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const deleteOldPreferencesQuery = 'DELETE FROM preferencias WHERE usuario_id = $1';
      await client.query(deleteOldPreferencesQuery, [userId]);

      const insertPreferenceQuery = 'INSERT INTO preferencias (usuario_id, preferencia) VALUES ($1, $2)';
      for (const preference of preferences) {
        await client.query(insertPreferenceQuery, [userId, preference]);
      }

      await client.query('COMMIT');
      res.status(200).send({ message: 'Preferences saved successfully' });
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Error saving preferences', err);
      res.status(500).send({ message: 'Error saving preferences' });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Database connection error', err);
    res.status(500).send({ message: 'Database connection error' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

