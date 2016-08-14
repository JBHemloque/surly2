var assert = require('assert');
var Stack = require("../src/stack.js")

describe("stack", function(){
	it("should be creatable", function(){
        var stack = new Stack(10);
        assert(stack);
    });

    it("should be empty when it's created", function(){
        var stack = new Stack(10);
        assert(stack.isEmpty());
    });

    it("should allow an item to be pushed", function(){
        var stack = new Stack(10);
        var item = "One";
        stack.push(item);
        var arr = stack.getArr();
        assert.equal(arr.length, 1);
        assert.equal(arr[0], item);
        assert(stack.isEmpty() === false);
    });

    it("should allow an item to be popped", function(){
        var stack = new Stack(10);
        var item = "One";
        stack.push(item);
        assert.equal(stack.getLast(), item);
        // getLast() doesn't empty the stack(!)
    });

    it("should operate in stack order", function(){
        var stack = new Stack(10);
        var one = "One";
        var two = "Two";
        var three = "Three";
        stack.push(one);
        assert.equal(stack.getLast(), one);
        stack.push(two);
        assert.equal(stack.getLast(), two);
        stack.push(three);
        assert.equal(stack.getLast(), three);
        assert.equal(stack.getArr().length, 3);    
    });
})