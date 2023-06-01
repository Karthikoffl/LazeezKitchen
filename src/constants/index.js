const http = require("http");
const https = require("https");
const axios = require("axios");
require("constants").config();

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app = http.createServer((req, res) => {
  if (req.url == "/products" && req.method == "GET") {
    // get the token
    let token = `${process.env.consumer_key}:${process.env.consumer_secret}`;
    // get the base 64 encoded string.
    let basic_auth = Buffer.from(token).toString("base64");
    // Send request to get the data.
    axios.default
      .get("https://lazeezkitchen.in/wp-json/wc/v2/products?per_page=20", {
        httpsAgent: agent,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + basic_auth,
        },
      })
      .then((response) => {
        // Successful response
        console.log("Successful request");
        res.statusCode = response.status;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(response.data));
      })
      .catch((error) => {
        // Unsuccessful response
        console.log("Unsuccessful request");
        let message = new Error(error.message);
        res.statusCode = 500;
        res.end(JSON.stringify(message));
      });
  }
});
