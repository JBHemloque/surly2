var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-inbuilt", function(done){
	it("should return a <VERSION>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("version", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, pkg.version);
				done();
			});
		});		
    });

    it("should return a <DATE>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("date", function(err, response) {
				assert.equal(err, undefined);
				var parsed = Date.parse(response);
				assert(parsed != NaN);
				done();
			});
		});		
    });

    it("should return a <SIZE>", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("size", function(err, response) {
				assert.equal(err, undefined);
				var parsed = parseInt(response);
				assert(parsed != NaN);
				done();
			});
		});		
    });

    it("should return default for a SR that doesn't map", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("sr foo", function(err, response) {
				assert.equal(err, 'No match.');
				done();
			});
		});		
    });

    it("should return properly for a SR that maps", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("sr hi", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "HI becomes: Hello!");
				done();
			});
		});		
    });

    it("should return a random value", function(done) {
    	var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("random", function(err, response) {
				assert.equal(err, undefined);
				assert((response === 'one') || (response === 'two') || (response === 'three'));
				done();
			});
		});	
    });
});