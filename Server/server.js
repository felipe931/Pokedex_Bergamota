const express = require('express');
const coers = require('cors');

require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(coers());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});