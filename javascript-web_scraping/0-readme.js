#!/urs/bin/node

const fs = require('fs');

fs.readmefile(process.argv[2], 'utf8', function (err,data) {
    if (err) {
        console.log(err);
    } else {
        process.stdout.write(data);
    }
});
