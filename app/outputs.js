exports.usage = function (fileName) {
    console.warn(`
    Usage: ${fileName} startDate [endDate]
    Both start date and end date must be in ISO 8601 (YYYY-MM-DD) format.
    End Date is optional and if it's ommited currend date will be used`)
}

exports.print = function (obj) {
    console.log(JSON.stringify(obj))
}
