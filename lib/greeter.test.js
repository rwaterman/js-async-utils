"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = require("./greeter");
test('My Greeter', () => {
    expect((0, greeter_1.default)('Carl')).toBe('Hello Carl');
});
