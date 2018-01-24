const express = require('express');
const path = require('path');
const moment = require('moment');

// Creating server
let app = express();

// Moment.js date formats
const dateFormats = [
    'MM-DD-YYYY',
    'MM-Do-YYYY',
    'DD-MM-YYYY',
    'Do-MM-YYYY',
    'YYYY-MM-DD',
    'YYYY-DD-MM',
    'Do-MMM-YYYY',
    'MMMM-DD-YYYY',
    'DD-MMMM-YYYY',
];

// Serving page content
app.get('/*', function(req, res) {
    // Storing passed date from user
    let getArgument = req.params['0'];

    // Returning static homepage
    if (getArgument == '') {
        res.sendFile(path.join(__dirname + '/public/index.html'));

    // Converting passed argument to dates and returning as object
    } else {
        // Deals with a unix timestamp
        if (!isNaN(getArgument)) {
            res.send({
                "unix": parseInt(getArgument),
                "natural": moment.unix(parseInt(getArgument)).format('MMMM DD, YYYY')
            });

        // Deals with a natural number
        } else {
            // Setting variable to moment 
            let date = moment(getArgument, dateFormats);
            
            // Invalid date returns null
            if (!date.isValid()) {
                res.send({
                    "unix": null,
                    "natural": null
                });

            } else {
                res.send({
                    "unix": date.format('X'),
                    "natural": date.format('MMMM DD, YYYY')
                });
            }
        }
    }
});

// Listening on port
app.listen(3000);