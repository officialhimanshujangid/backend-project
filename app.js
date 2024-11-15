const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from server side',
  });
});
app.post('/', (req, res) => {
  res.send('you can post now ');
});
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});
app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

const port = 8000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
