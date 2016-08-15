var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-condition", function(done){
	it("should enable <SET> and <GET> precursors to the test", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("set foo", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "OK");
				bot.talk("get", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, "FOO");
					done();
				});
			});
		});		
    });

    it("should allow block conditions", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("set foo", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "OK");
				bot.talk("condition 1", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, "");
					bot.talk("set bar", function(err, response) {
						assert.equal(err, undefined);
						assert.equal(response, "OK");
						bot.talk("condition 1", function(err, response) {
							assert.equal(err, undefined);
							assert.equal(response, "Foo is bar!");
							done();
						});
					});
				});
			});
		});		
    });

    it("should allow single predicate conditions", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("set foo", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "OK");
				bot.talk("condition 2", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, "");
					bot.talk("set bar", function(err, response) {
						assert.equal(err, undefined);
						assert.equal(response, "OK");
						bot.talk("condition 2", function(err, response) {
							assert.equal(err, undefined);
							assert.equal(response, "Bar!");
							bot.talk("set baz", function(err, response) {
								assert.equal(err, undefined);
								assert.equal(response, "OK");
								bot.talk("condition 2", function(err, response) {
									assert.equal(err, undefined);
									assert.equal(response, "Baz!");
									done();
								});
							});
						});
					});
				});
			});
		});		
    });

    it("should allow multi predicate conditions", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("set foo", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "OK");
				bot.talk("condition 3", function(err, response) {
					assert.equal(err, undefined);
					assert.equal(response, "");
					bot.talk("set bar", function(err, response) {
						assert.equal(err, undefined);
						assert.equal(response, "OK");
						bot.talk("condition 3", function(err, response) {
							assert.equal(err, undefined);
							assert.equal(response, "Bar!");
							bot.talk("set baz", function(err, response) {
								assert.equal(err, undefined);
								assert.equal(response, "OK");
								bot.talk("condition 3", function(err, response) {
									assert.equal(err, undefined);
									assert.equal(response, "Baz!");
									done();
								});
							});
						});
					});
				});
			});
		});		
    });
});