module.exports = {
    verbose: true,
    setupFiles: [
        "./setupJest.js"
    ],
    transform: {
      "^.+\\.js$": "babel-jest",
     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "./fileTransformer.js"
    },
    moduleNameMapper: {
        "static/(.*)$": "<rootDir>/static/$1",
        "scss/(.*)$": "<rootDir>/scss/$1",
        "Common/(.*)$": "<rootDir>/Common/$1",
        "Components/(.*)$": "<rootDir>/Components/$1",
        "UI/(.*)$": "<rootDir>/Components/UI/$1",
         "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>frontend/__mocks__/fileMock.js"
    },
    globals: {
        "wx": true,
        "IS_DEV_ENV": true
    }
};