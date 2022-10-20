import Logger from './logger.js'

/**
 * Get Logger instance
 * @example ```js
 * const logger = loghere.getLogger()
 * ```
 */
export function getLogger() {
	const logger = new Logger()
	return logger
}
