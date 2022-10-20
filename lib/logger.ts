import Time from './time.js'

/**
 * Logger level
 *
 * @default ALL
 * @description The log shown or not depend on the following level:
 *
 * `ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF`
 */
export enum LoggerLevel {
	ALL,
	TRACE,
	DEBUG,
	INFO,
	WARN,
	ERROR,
	FATAL,
	MARK,
	OFF,
}
export namespace LoggerLevel {
	export function allowedLevel(): string[] {
		return Object.keys(LoggerLevel).filter(it => Number(it) >= 0)
	}
}

/**
 * Logger
 * @example ``` js
 * const logger = new Logger()
 * logger.level = LoggerLevel.DEBUG
 * logger.debug("This is content")
 * ```
 */
export default class Logger {
	private _loggerLevel = LoggerLevel.ALL

	get level () {
		return this._loggerLevel
	}

	set level(level: LoggerLevel) {
		const SMALLEST_INDEX = 0
		if (level >= SMALLEST_INDEX) {
			this._loggerLevel = level
		} else {
			const errMsg = `日志等级 level 错误，只能设置为以下值：${LoggerLevel.allowedLevel().join(', ')}`
			throw new Error(errMsg)
		}
	}

	static getTime() {
		const now = new Time()
		return now.getFormattedTime()
	}

	isActive = (currentLevel: LoggerLevel) => {
		return currentLevel >= this._loggerLevel;
	}

	log = (content: string) => {
		const currentLevel = LoggerLevel.ALL
		if (this.isActive(currentLevel)) {
			console.log(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`)
		}
	}

	debug = (content: string) => {
		const currentLevel = LoggerLevel.DEBUG
		if (this.isActive(currentLevel)) {
			console.debug(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`)
		}
	}

	info = (content: string) => {
		const currentLevel = LoggerLevel.INFO
		if (this.isActive(currentLevel)) {
			console.info(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`)
		}
	}

	warn = (content: string) => {
		const currentLevel = LoggerLevel.WARN
		if (this.isActive(currentLevel)) {
			console.warn(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`)
		}
	}

	error = (content: string) => {
		const currentLevel = LoggerLevel.ERROR
		if (this.isActive(currentLevel)) {
			console.error(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`)
		}
	}
}
