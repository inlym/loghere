"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const logger_js_1 = __importDefault(require("./logger.js"));
function getLogger() {
    const logger = new logger_js_1.default();
    return logger;
}
exports.getLogger = getLogger;
//# sourceMappingURL=loghere.js.map