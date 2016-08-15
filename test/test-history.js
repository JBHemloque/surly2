var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-history", function(done){
	it("should enable test input", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("this is some input", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "This is some output. This is some more output. Here is even more output.");
				done();
			});
		});		
    });

    it("should allow input", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("this is some input", function(err, response) {
				assert.equal(err, undefined);
				bot.talk("input", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, '"this is some input."');
					done();
				});
			});
		});		
    });

    it("should allow multiple input", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("this is some input", function(err, response) {
				assert.equal(err, undefined);
				bot.talk("input", function(err, response) {
					assert.equal(err, undefined);
					bot.talk("input 2", function(err, response) {
						assert.equal(err, undefined);
						assert.equal(response, '"this is some input."');
						done();
					});
				});
			});
		});		
    });

    it("should allow that", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("this is some input", function(err, response) {
				assert.equal(err, undefined);
				bot.talk("that", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, '\"THIS IS SOME OUTPUT.\"');
					done();
				});
			});
		});		
    });

    it("should allow multiple that", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("this is some input", function(err, response) {
				assert.equal(err, undefined);
				bot.talk("that", function(err, response) {
					assert.equal(err, undefined);
					bot.talk("that 2", function(err, response) {
						assert.equal(err, undefined);
						assert.equal(response, '\"THIS IS SOME OUTPUT.\"');
						done();
					});
				});
			});
		});		
    });
});