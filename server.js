const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

// API 
app.get('/api/login', (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: {
      token: "abcxyz",
      timeExpired: Date.now() + 60 * 1000 // miliseconds
    }
  });
})
app.get('/api/refreshToken', (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: {
      token: "new token",
      timeExpired: Date.now() + 60 * 1000 // miliseconds
    }
  });
})
app.get('/api/users', (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: { email: 'hello@gmail.com', password: '123456@' }
  });
})
//END API 


app.listen(PORT, () => {
  console.log(`Server at runnning at ${PORT}`);
});