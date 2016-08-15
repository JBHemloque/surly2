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
});