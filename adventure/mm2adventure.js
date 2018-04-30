
util = require('util');
fs = require('fs');
fs.readFile('gen1.mm', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    //console.log(data);
    const parseString = require('xml2js-parser').parseString;
    //const xml = '<root>Hello xml2js-parser!</root>';
    const xml = data;
    parseString(xml, (err, result) => {
        //console.log(result);
        console.log(util.inspect(result, false, null))
    });
});

