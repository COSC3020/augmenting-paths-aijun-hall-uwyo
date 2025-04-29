const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Test 1: Simple path through two edges
var graph = {'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == JSON.stringify(['foo', 'boo', 'bar']));

// Test 2: Multiple paths, but one direct valid path
var graph = {'foo': {'boo': 7, 'd': 4},
    'boo': {'e': 3},
    'd': {'bar': 4},
    'e': {'foo': 1},
    'bar': {'foo': 2}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == JSON.stringify(['foo', 'd', 'bar']));

// Test 3: No outgoing edges from start node
var graph = {'foo': {},
    'bar': {'foo': 1}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == '[]');

// Test 4: Start and end node are same
var graph = {'foo': {},
    'bar': {'foo': 1}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'foo')) == JSON.stringify(['foo']));

// Test 5: Multiple valid paths, should return shortest
var graph = {
    'a': {'b': 1, 'c': 1},
    'b': {'d': 1},
    'c': {'d': 1},
    'd': {}
};
assert(JSON.stringify(augmentingPath(graph, 'a', 'd')) == JSON.stringify(['a', 'b', 'd']));

// Test 6: Cycle in graph
var graph = {
    'x': {'y': 1},
    'y': {'z': 1},
    'z': {'x': 1}
};
assert(JSON.stringify(augmentingPath(graph, 'x', 'z')) == JSON.stringify(['x', 'y', 'z']));

// Test 7: Disconnected nodes with no paths
var graph = {
    'a': {'b': 1},
    'b': {},
    'z': {}
};
assert(JSON.stringify(augmentingPath(graph, 'a', 'z')) == '[]');