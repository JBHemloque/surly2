var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-variables", function(done){
	it("should enable <SET> and <GET>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("user set", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "Set 'user' to 'foo'.");
				bot.talk("user get", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, "Looked up 'user' and found 'foo'.");
					done();
				});
			});
		});		
    });
});