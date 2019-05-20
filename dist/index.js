"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var copyString_1 = __importDefault(require("./js/copyString"));
var copy = copyString_1.default.init;
if (typeof window !== 'undefined') {
    window.copy = copy;
}
exports.default = copy;
