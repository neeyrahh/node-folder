let fs = require('fs');
let path = require('path');
let extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function(err, files) {
	if (err) throw err;

	for (var i = 0; i < files.length; i++) {
		
		if (path.extname(files[i]) === extension) {
			console.log(files[i])
		}
	}
})
