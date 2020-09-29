'use strict'

const Time = require('./time.js')

const LOGGER_LEVEL = [
	'ALL',
	'TRACE',
	'DEBUG',
	'INFO',
	'WARN',
	'ERROR',
	'FATAL',
	'MARK',
	'OFF',
]
const levelIndex = Symbol('Level-Index')

module.exports = class Logger {

	constructor() {

		// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
		this[levelIndex] = 0
	}

	get level() {
		const index = this[levelIndex]
		return LOGGER_LEVEL[index]
	}

	set level(val) {
		const index = LOGGER_LEVEL.indexOf(val.toUpperCase())
		const SMALLEST_INDEX = 0
		if ( index >= SMALLEST_INDEX) {
			this[levelIndex] = index
		} else {
			throw new Error(`日志等级 level 错误，只能设置为以下值：${LOGGER_LEVEL.toString()}`)
		}
	}

	static getTime() {
		const now = new Time()
		return now.getFormattedTime()
	}

	isActive(currentLevel) {
		const currentIndex = LOGGER_LEVEL.indexOf(currentLevel)
		if (currentIndex >= this[levelIndex]) {
			return true
		}
		return false
	}

	debug(content) {
		const currentLevel = 'DEBUG'
		if (this.isActive(currentLevel)) {
			console.debug(`[${Logger.getTime()}] [${currentLevel}] ${content}`)
		}
	}

	info(content) {
		const currentLevel = 'INFO'
		if (this.isActive(currentLevel)) {
			console.info(`[${Logger.getTime()}] [${currentLevel}] ${content}`)
		}
	}

	warn(content) {
		const currentLevel = 'WARN'
		if (this.isActive(currentLevel)) {
			console.warn(`[${Logger.getTime()}] [${currentLevel}] ${content}`)
		}
	}

	error(content) {
		const currentLevel = 'ERROR'
		if (this.isActive(currentLevel)) {
			console.error(`[${Logger.getTime()}] [${currentLevel}] ${content}`)
		}
	}

}
