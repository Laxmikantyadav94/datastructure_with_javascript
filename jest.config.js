const {defaults} = require('jest-config');
module.exports = {
    verbose:true,
    testEnvironment: "node",
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    collectCoverage: true,
    coverageDirectory :"./coverage_report",
    collectCoverageFrom:[
        "exercises/**/*.{js,jsx}",
        "!**/package.json",
        "!**/package-lock.json",
        "!**/node_modules/**",
        "!**/coverage_report/**"
    ],
    coverageReporters :["text","clover"] //html
  };
