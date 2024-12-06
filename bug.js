const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // This error handler will not catch errors that happen after res.send()
    console.error('Error:', err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});