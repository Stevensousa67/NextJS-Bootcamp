"use strict";
// Primitive Types
let id = 5;
let userName = 'Steven';
let isWorking = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Steven', true]; // Important to follow the order of the tuple
// Tuple Array
let employees;
employees = [
    [1, 'Steven'],
    [2, 'John'],
    [3, 'Jane']
];
// Union
let pid;
pid = '22';
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: 'Steven'
};
