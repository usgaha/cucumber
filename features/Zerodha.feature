@trade
Feature:trade
Scenario:zerodha trade
Then user navogates to url
|url|https://kite.zerodha.com/|
Then user enters username and password
|username||
|password||
Then user clicks on submit
Then user enters App code
|code|718313|
Then user hovers mouse on trade tab
|tab|NIFTY 50|
Then user clicks on more
Then user selects "Option Chain"
Then user search 

