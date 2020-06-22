# Web Scrape X  
cli web scraper  
default url: `naleeriddell.com`  
default query: `console.log($('li').text());`  
  
**Instructions:**  
with node installed, navigate to repo and type `npm install`  
to start: `node scrape.js`  
first prompt is url, type in the webpage url you want to scrape  
second prompt is query, type in the callback function for the returned data  
  
**For Callback Function**  
query syntax is jquery, for more info visit cheerio.js.org  
$ === the returned promise from fetching data  
  
**example**  
on query prompt:  
 `$('h1').each((i, el) => {
 	const item = $(el).text();
 	console.log(item);
})`  
  
to scrape and console.log h1's
