const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
	const event = req.body;

  events.push(event);

  // POST
	axios.post('http://localhost:4000/events', event).catch((err) => {
		console.error(err.message);
	});
	
  // COMMENT
	axios.post('http://localhost:4002/events', event).catch((err) => {
		console.error(err.message);
  });
 
	// QUERY
	axios.post('http://localhost:4003/events', event).catch((err) => {
		console.error(err.message);
  });

	// MODERATION
	axios.post('http://localhost:4004/events', event).catch((err) => {
		console.error(err.message);
  });


	res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
	res.send(events);
});

app.listen(4005, () => {
	console.log('Listening on 4005');
});