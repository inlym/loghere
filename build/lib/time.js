"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zerofill(n) {
    const SMALLEST_SINGLE_DIGIT = 0;
    const LARGEST_SINGLE_DIGIT = 9;
    if (n >= SMALLEST_SINGLE_DIGIT && n <= LARGEST_SINGLE_DIGIT) {
        return `0${n.toString()}`;
    }
    return n.toString();
}
class Time extends Date {
    constructor() {
        super();
    }
    getFullYear() {
        return super.getFullYear();
    }
    getFullMonth() {
        return zerofill(this.getMonth());
    }
    getFullDay() {
        return zerofill(this.getUTCDay());
    }
    getFullHour() {
        return zerofill(this.getHours());
    }
    getFullMinute() {
        return zerofill(this.getMinutes());
    }
    getFullSecond() {
        return zerofill(this.getSeconds());
    }
    getFormattedTime() {
        const formatted = `${this.getFullYear()}-${this.getFullMonth()}-${this.getFullDay()} ${this.getFullHour()}:${this.getFullMinute()}:${this.getFullSecond()}`;
        return formatted;
    }
}
exports.default = Time;
//# sourceMappingURL=time.js.map