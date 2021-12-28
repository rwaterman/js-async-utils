"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to = void 0;
async function to(promise) {
    try {
        return { err: null, res: await promise };
    }
    catch (err) {
        return { err: err, res: null };
    }
}
exports.to = to;
