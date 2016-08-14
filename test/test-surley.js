var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

describe("surly", function(){
	it("should return a version", function(){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
				bot.talk(line, function(err, response) {
				assert.equal(err, undefined);
				assert.equal(response, pkg.version);
			});
		});		
    });
});