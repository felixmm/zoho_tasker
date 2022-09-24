module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // "eslint:recommended",
    "plugin:vue/vue3-recommended",
    // "prettier"
    // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/max-attributes-per-line": ["error", {
    "singleline": {
      "max": 5
    },      
    "multiline": {
      "max": 1
    }
    }],
    "vue/html-self-closing": ["error", {
    "html": {
      "void": "always",
      "normal": "always",
      "component": "always"
    },
    "svg": "always",
    "math": "always"
  }]
  },
};
