const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      // Error handling here, even if response already sent
      console.error('Error:', err);
      // Consider sending a 500 response to the client (if appropriate) but avoid modifying the original response object
      //res.status(500).send('Internal Server Error');      
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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