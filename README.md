# Timestamp Microservice
**Deployed exmample [here](https://rocky-thicket-78849.herokuapp.com/).**
## What it does
When passed a date as either natural (e.g January 21, 1993) or a unix timestamp (9922929), this microservice will return the natural and unix timestamp for the given date.

## Output example

**If you passed:** https://example.com/01jan1970

**You would receive:** `{"unix":11212,"natural":"January 01, 1970"}`

If the passed query can't be converted to a date, both fields will return `null`.

## Built With

**Backend**
* [Node.js](https://nodejs.org/en/)
* [Express.js](http://expressjs.com/)
* [Moment.js](https://momentjs.com/)

**Frontend**
* [Bootstrap](https://getbootstrap.com/)


----

This is a project from the [FreeCodeCamp](https://www.freecodecamp.org) backend curriculum. 

