import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Backend działa');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
