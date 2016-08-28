# DateDiff

DateDiff calculates date and time difference between two dates

## To install project

```
npm install
```
### Project uses Webpack to bundle all files in one file (./build/server.js). To bundle all files in one run

```
npm run start
```

### To execute a program run
```
node server.js YYYY-MM-DD [YYYY-MM-DD]
```
1. First argument is a start date/time and it's required
2. Second argument is an end date/time and it is optional. If it's omitted current date/time will be used.

Date part has to be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD)

### Examples:
```
node server.js 2016-07-09
node server.js 2016-07-09 2017-01-01
```
