var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-format", function(done){
	it("should support <UPPERCASE>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("uppercase Foo bAr baZ", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "FOO BAR BAZ");
				done();
			});
		});		
    });

    it("should support <LOWERCASE>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("lowercase Foo bAr baZ", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "foo bar baz");
				done();
			});
		});		
    });

    it("should support <FORMAL>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("formal Foo bAr baZ", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "Foo Bar Baz");
				done();
			});
		});		
    });

    it("should support <SENTENCE>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("sentence", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "This text should be formatted in sentence case. That means that the first letter of each sentence should be uppercase. Everything else should be lowercase.");
				done();
			});
		});		
    });
});