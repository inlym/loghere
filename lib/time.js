'use strict'

/**
 * 将 0 至 9 的数字前补零，输出为字符串，例如 00,01,...,09
 * @param {number} n
 */
function zerofill(n) {
	if (typeof n !== 'number') {
		throw new Error('参数 n 应该是一个数字')
	}

	const SMALLEST_SINGLE_DIGIT = 0
	const LARGEST_SINGLE_DIGIT = 9

	if (n >= SMALLEST_SINGLE_DIGIT && n <= LARGEST_SINGLE_DIGIT) {
		return `0${n.toString()}`
	}

	return n.toString()
}

module.exports = class Time extends Date {
	constructor() {
		super()
	}

	getFullYear() {
		return super.getFullYear().toString()
	}

	getFullMonth() {
		return zerofill(this.getMonth())
	}

	getFullDay() {
		return zerofill(this.getUTCDay())
	}

	getFullHour() {
		return zerofill(this.getHours())
	}

	getFullMinute() {
		return zerofill(this.getMinutes())
	}

	getFullSecond() {
		return zerofill(this.getSeconds())
	}

	/** 得到格式化的时间格式，格式示例： 2020-10-10 15:30:34 */
	getFormattedTime() {
		const formatted = `${this.getFullYear()}-${this.getFullMonth()}-${this.getFullDay()} ${this.getFullHour()}:${this.getFullMinute()}:${this.getFullSecond()}`

		return formatted
	}
}
