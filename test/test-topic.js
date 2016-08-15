var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-topic", function(done){
	it("should show no topic if no topic set", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("topic", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "Current topic is '*'.");
				done();
			});
		});		
    });

    it("should show NO TOPIC for TEST if no topic set", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("test", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "NO TOPIC");
				done();
			});
		});		
    });

    it("should allow setting a topic", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("topic cardassians", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "Set topic to CARDASSIANS");
				done();
			});
		});		
    });

    it("should allow a topic to be testable via TEMPLATE", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("topic foo", function(err, response) {
				assert.equal(err, undefined);
				bot.talk("test", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, "FOO!");
					bot.talk("topic bar", function(err, response) {
						assert.equal(err, undefined);
						bot.talk("test", function(err, response) {
							assert.equal(err, undefined);
							assert.equal(response, "BAR!");
							done();
						});
					});
				});
			});
		});		
    });
});