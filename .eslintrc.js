module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "rules": {
            "no-unused-vars": ["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
        }
    }
}
