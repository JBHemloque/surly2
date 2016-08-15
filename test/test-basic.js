var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-basic-aiml", function(done){
	it("should respond to HI", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("hi", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "Hello!");
				done();
			});
		});		
    });
});