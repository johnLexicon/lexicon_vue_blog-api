const express = require('express');
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    errors: {
      message: err.message || 'Internal Server Error',
    },
  });
});

module.exports = app;
