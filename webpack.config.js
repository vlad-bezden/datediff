const path = require('path')

module.exports = {
    entry: './app/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js'
    }
}