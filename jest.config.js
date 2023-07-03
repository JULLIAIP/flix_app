/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/tests"
  ],
  
  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // A map from regular expressions to paths to transformers
  transform: { "^.+\\.tsx?$": "ts-jest" },


};
