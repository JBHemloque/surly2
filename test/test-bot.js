var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-bot", function(done){
	it("should allow bot variables to be set", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			assert.equal(bot.environment.bot_attributes["user"], undefined);
			bot.talk("bot", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "Set bot.'user' to 'foo'.");
				// bot is a read-only attribute, so it shouldn't be settable
				assert.equal(bot.environment.bot_attributes["user"], undefined);
				done();
			});
		});		
    });
});