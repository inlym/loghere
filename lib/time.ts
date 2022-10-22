/**
 * 将 0 至 9 的数字前补零，输出为字符串，例如 00,01,...,09 *
 * @deprecated
 * using `padStart(2, '0')` instead
 */
function zerofill(n: number) {
	const SMALLEST_SINGLE_DIGIT = 0
	const LARGEST_SINGLE_DIGIT = 9

	if (n >= SMALLEST_SINGLE_DIGIT && n <= LARGEST_SINGLE_DIGIT) {
		return `0${n.toString()}`
	}

	return n.toString()
}

export default class Time extends Date {
	constructor() {
		super()
	}

	getFullYear() {
		return super.getFullYear()
	}

	getFullMonth() {
		return zerofill(this.getMonth() + 1)
	}

	getFullDate() {
		return zerofill(this.getDate())
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

	/**
	 * 得到格式化的时间格式
	 *
	 * @description 格式示例： 2020-10-10 15:30:34
	 */
	getFormattedTime() {
		const formatted = `${this.getFullYear()}-${this.getFullMonth()}-${this.getFullDate()} ${this.getFullHour()}:${this.getFullMinute()}:${this.getFullSecond()}`

		return formatted
	}
}
