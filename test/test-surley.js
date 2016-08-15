var assert = require('assert');
var Surly = require('../src/Surly');

var pkg = require('../package.json');

var bot;

describe("surly", function(done){
	it("should expose aiml", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml) == 'object');
        	done();
		});	
	});

	it("should expose wipe()", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml.wipe) == 'function');
        	done();
		});	
	});

	it("should expose parseAiml()", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml.parseAiml) == 'function');
        	done();
		});	
	});

	it("should expose showCategories()", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml.showCategories) == 'function');
        	done();
		});	
	});

	it("should expose hasData()", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml.hasData) == 'function');
        	done();
		});	
	});

	it("should expose getResponse()", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml.getResponse) == 'function');
        	done();
		});	
	});

	it("should expose loadDir()", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(typeof(bot.aiml.loadDir) == 'function');
        	done();
		});	
	});

	it("should be creatable with no data", function(done){
		var bot = new Surly();
		assert(bot);
		assert.equal(bot.aiml.hasData(), false);	
		done();
	});

	it("should be creatable with data", function(done){
		var bot = new Surly({brain: 'data/aiml_test'}, function() {
        	assert(bot);
        	assert(bot.aiml.hasData());
        	done();
		});	
	});

	it("should be loadable with data", function(done){
		var bot = new Surly();
		bot.aiml.loadDir('data/aiml_test', function() {
			assert(bot.aiml.hasData());
			done();
		});
	});
});