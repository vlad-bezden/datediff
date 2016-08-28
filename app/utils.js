const moment = require('moment')

exports.parse = function (startDate, endDate = Date.now()) {
    return {
        startDate: moment(startDate),
        endDate: moment(endDate)
    }
}

exports.duration = function (duration) {
    return moment.duration(duration.endDate - duration.startDate)
}

exports.calculate = function (diff) {
    return {
        full: {
            years: diff.years(),
            months: diff.months(),
            days: diff.days(),
            hours: diff.hours(),
            minutes: diff.minutes(),
            seconds: diff.seconds(),
            milliseconds: diff.milliseconds()            
        },
        asYears: diff.asYears(),
        asMonths: diff.asMonths(),
        asDays: diff.asDays(),
        asWeeks: diff.asWeeks(),
        asHours: diff.asHours(),
        asMinutes: diff.asMinutes(),
        asSeconds: diff.asSeconds(),
        asMilliseconds: diff.asMilliseconds(),
        humanize: diff.humanize()
    }
}