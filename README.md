# Source Code Crawler

### http://vlastapolach.cz/myscript/sourcecode-crawler/

## 1) When do you want to use this?
For marketing/sales activities you can search through the list of URLs to check for a piece of code to filter URLs which are using Wordpress, Joomla or any other piece of SW.

## 2) Download Chrome Plugin
For security reasons, you can't browse other URLs source code (Access-Control-Allow-Origin). You have to use [Google Chrome](https://www.google.com/chrome/) and download and **enable** this plugin: **[Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)**. Before new run, it is recommended to **Deactivate** and then **Active** the A-C-A-O* plugin and refresh the page.

## 3) Paste the search phrase
For example: `wp-includes`

## 4) Paste the list of URLs
One URL per line, in the format:
`https://wordpress.org/`
`http://supermaminka.cz/`
`http://www.vlastapolach.cz/`
Each URL on a single line, no spaces, no commas, full URL (including `http://`)

## 5) Click Proceed
And wait for the crawling to complete.

## 6) Download CSV
Based on the number of URLs and connection speed, searching might take a while. The Download button will become active after the searching is done.

Live on: http://vlastapolach.cz/myscript/sourcecode-crawler/

*(This tool has to run from HTTP or from localhost. Due to limitations of accessing HTTP from HTTPS (blocking mixed content) it wouldn't work properly)*
