module.exports = {
  extends: "airbnb-base",
  rules: {
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: false
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "no-restricted-syntax": [
      2,
      "BreakStatement",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-use-before-define": ["error", { functions: false, classes: true }],
    "no-unused-vars": [1, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-console": 0,
    "max-len": 0,
    radix: ["error", "as-needed"],
    "no-await-in-loop": 0,
    "camelcase": 0,
    "no-param-reassign": 0
  }
};
