const utils = require('./utils')
const outputs = require('./outputs')

const args = process.argv.slice(2)

if (args.length < 1 || args.length > 2) {
    outputs.usage(__filename)
    process.exit(-1)
}

const dates = utils.parse(...args)
const result = utils.calculate(dates)

outputs.print(result)