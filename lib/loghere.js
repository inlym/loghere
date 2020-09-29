'use strict'

const Logger = require('./logger.js')

module.exports.getLogger = function getLogger() {
	const logger = new Logger()
	return logger
}
