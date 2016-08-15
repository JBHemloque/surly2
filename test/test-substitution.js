var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly-substitution", function(done){
	it("should process PERSON correctly", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("person", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "The following lines should be the same:\nhe him his his himself i me mine myself I me mine myself\nhe him his his himself i me mine myself I me mine myself");
				done();
			});
		});		
    });

    it("should process PERSON * correctly", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("person I sells sea shells down by the sea shore", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "he SELLS SEA SHELLS DOWN BY THE SEA SHORE");
				done();
			});
		});		
    });

    it("should process PERSON2 correctly", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("person2", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "The following lines should be the same:\nyou you your yours yourself me my mine myself\nyou you your yours yourself me my mine myself");
				done();
			});
		});		
    });

    it("should process PERSON2 * correctly", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("person2 I sells sea shells down by the sea shore", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "you SELLS SEA SHELLS DOWN BY THE SEA SHORE");
				done();
			});
		});		
    });

    it("should process GENDER correctly", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("gender", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "The following lines should be the same:\nshe her her herself he him his himself\nshe her her herself he him his himself");
				done();
			});
		});		
    });

    it("should process GENDER * correctly", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
			bot.talk("gender he sells sea shells down by the sea shore", function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, "she SELLS SEA SHELLS DOWN BY THE SEA SHORE");
				done();
			});
		});		
    });
});