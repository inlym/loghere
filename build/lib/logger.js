"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerLevel = void 0;
const time_js_1 = __importDefault(require("./time.js"));
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["ALL"] = 0] = "ALL";
    LoggerLevel[LoggerLevel["TRACE"] = 1] = "TRACE";
    LoggerLevel[LoggerLevel["DEBUG"] = 2] = "DEBUG";
    LoggerLevel[LoggerLevel["INFO"] = 3] = "INFO";
    LoggerLevel[LoggerLevel["WARN"] = 4] = "WARN";
    LoggerLevel[LoggerLevel["ERROR"] = 5] = "ERROR";
    LoggerLevel[LoggerLevel["FATAL"] = 6] = "FATAL";
    LoggerLevel[LoggerLevel["MARK"] = 7] = "MARK";
    LoggerLevel[LoggerLevel["OFF"] = 8] = "OFF";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
(function (LoggerLevel) {
    function allowedLevel() {
        return Object.keys(LoggerLevel).filter(it => Number(it) >= 0);
    }
    LoggerLevel.allowedLevel = allowedLevel;
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
class Logger {
    constructor() {
        this._loggerLevel = LoggerLevel.ALL;
        this.isActive = (currentLevel) => {
            return currentLevel >= this._loggerLevel;
        };
        this.log = (content) => {
            const currentLevel = LoggerLevel.ALL;
            if (this.isActive(currentLevel)) {
                console.log(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
            }
        };
        this.debug = (content) => {
            const currentLevel = LoggerLevel.DEBUG;
            if (this.isActive(currentLevel)) {
                console.debug(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
            }
        };
        this.info = (content) => {
            const currentLevel = LoggerLevel.INFO;
            if (this.isActive(currentLevel)) {
                console.info(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
            }
        };
        this.warn = (content) => {
            const currentLevel = LoggerLevel.WARN;
            if (this.isActive(currentLevel)) {
                console.warn(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
            }
        };
        this.error = (content) => {
            const currentLevel = LoggerLevel.ERROR;
            if (this.isActive(currentLevel)) {
                console.error(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
            }
        };
    }
    get level() {
        return this._loggerLevel;
    }
    set level(level) {
        const SMALLEST_INDEX = 0;
        if (level >= SMALLEST_INDEX) {
            this._loggerLevel = level;
        }
        else {
            const errMsg = `日志等级 level 错误，只能设置为以下值：${LoggerLevel.allowedLevel().join(', ')}`;
            throw new Error(errMsg);
        }
    }
    static getTime() {
        const now = new time_js_1.default();
        return now.getFormattedTime();
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map