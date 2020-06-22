const rp = require('request-promise');
const cheerio = require('cheerio');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("url (empty for default):", function(url) {
    rl.question("query (empty for default):", function(query) {

		let newUrl = url ? url : "https://naleeriddell.com";
		const options = {
			uri: newUrl,
			transform: function (body) {
			  return cheerio.load(body);
			}
		  };
		
		rp(options)
		  .then(($) => {
			console.log('\n============\n');
			// $('li').each((i, el) => {
			// 	const item = $(el).text();
			// 	console.log(item);
			// })
			// console.log($('li').text());
			if (query) {
			eval(query);
			} else {
				console.log($('li').text());

			}

			rl.close();
		  })
		  .catch((err) => {
			console.log(err);
			rl.close();
		  });
        // console.log(`${name}, is a citizen of ${country}`);
    });
});

rl.on("close", function() {
	console.log('\n ============');
    console.log("Thanks for using Web-Scrapey-X");
    process.exit(0);
});