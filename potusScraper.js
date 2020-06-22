const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
	uri: `https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7`,
	transform: function (body) {
	  return cheerio.load(body);
	}
  };

rp(options)
  .then(($) => {
	// console.log($('li').text());
	$('h1').each((i, el) => {
		const item = $(el).text();
		console.log(item);
	})
  })
  .catch((err) => {
    console.log(err);
  });