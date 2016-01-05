#!/usr/bin/env node
'use strict';
var execFile = require('child_process').execFile;
var SonosDiscovery = require('sonos-discovery');
var filenameToTouch, discovery;

if (process.argv.length !== 3) {
	console.error('USAGE: node ' + process.argv[1] + ' <filename>\n');
	process.exit(1);
}
filenameToTouch = process.argv[2];

discovery = new SonosDiscovery();

discovery.on('topology-change', function (topology) {
	execFile('touch', [filenameToTouch], function(error, stdout, stderr) {
		if (error) {
			console.error(error.message);
			process.exit(2);
		};
	});
});
