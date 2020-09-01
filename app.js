const express = require('express');
const request = require('request');

const app = express();
const key = require("./link.json");
const PORT = process.env.PORT || 3000 ;



app.get('/', (req, res) => {
	let city = req.query.city;

	request(
		`${key.key}&q=${city}`,
		function(error, response, body) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
                res.send(`the whole data is : ${body}
				The weather in your city ${city} is ${data.current.temp_c}`
				);
			}
		}
	);
});

app.listen(PORT, () => console.log('Server started on port 3000'));

