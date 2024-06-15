
util = require('util');
fs = require('fs');
fs.readFile('gen1.mm', 'utf8', function (err1,data) {
    if (err1) {
        return console.log(err1);
    }
    //console.log(data);
    const parseString = require('xml2js-parser').parseString;
    //const xml = '<root>Hello xml2js-parser!</root>';
    const xml = data;
    parseString(xml, (err2, result) => {
        if (err2) {
            return console.log(err2);
        }
        //console.log(result);
        console.log(util.inspect(result, false, null));
        
        extractedData = result['map']['node'][0]['$']['TEXT'];
        console.log(extractedData);
    });
});
