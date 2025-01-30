const express = require('express');
const APIRoute = require('./routes/APIRoute')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api', APIRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
