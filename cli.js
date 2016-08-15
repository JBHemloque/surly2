#!/usr/bin/env node

var pkg = require('./package.json');
var Surly = require('./src/Surly');
var conf = require('rc')('surly', {
    brain: '',
    b: '',
    help: false,
    version: false
});

var options = {
    brain: conf.b || conf.brain || __dirname + '/data/aiml',
    help: conf.help || conf.h,
    version: conf.version,
};

var prompt = 'You: ';

if (options.help) {
    console.log('Surly chat bot command line interface\n\n' +
        'Options: \n' +
        '  -b, --brain       AIML directory (aiml/)\n' +
        '  --help            Show this help message\n' +
        '  --version         Show version number');
    process.exit();
}

if (options.version) {
    console.log(pkg.version);
    process.exit();
}

var bot = new Surly({
    brain: options.brain
}, function() {
    console.log('--- AIML files loaded ---\n\nSurly: Hello! Type quit to quit or /help for unhelpful help.');
});

var lineReader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
lineReader.setPrompt(prompt);

lineReader.on('line', function(line) {
    if (line === 'quit' || line === 'exit') {
        process.exit(0);
    }
    bot.talk(line, function(err, response) {
        console.log('Surly: ' + response);
    });
});