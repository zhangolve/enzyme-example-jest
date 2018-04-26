module.exports = {
    verbose: true,
    setupFiles: [
        "raf/polyfill",
        "./setupJest.js"
    ],
    "transform": {
      "^.+\\.js$": "babel-jest"
    },
    moduleNameMapper: {
        "static/(.*)$": "<rootDir>/static/$1",
        "scss/(.*)$": "<rootDir>/src/ljmall/website/mobile/frontend/scss/$1",
        "Common/(.*)$": "<rootDir>/src/ljmall/website/mobile/frontend/Common/$1",
        "SomCommon/(.*)$": "<rootDir>/src/ljmall/website/store_operator_mobile/frontend/Common  /Components/UI/$1"
    },
    globals: {
        "wx": true,
        "IS_DEV_ENV": true
    }
};