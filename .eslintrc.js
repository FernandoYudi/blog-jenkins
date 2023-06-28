module.exports = {
    // Other ESLint configurations...
    plugins: ['html'],
    overrides: [
      {
        files: ['**/*.html'],
        parser: 'espree',
        rules: {
          // HTML-specific rules
          'html/no-self-closing': 'off', // Allow self-closing tags
          'html/no-unnecessary-attributes': 'error', // Disallow unnecessary attributes
          'html/no-redundant-attributes': 'error', // Disallow redundant attributes
          'html/indent': ['error', 2], // Enforce 2 spaces indentation
          // Add more HTML-specific rules as per your requirements
        },
      },
    ],
  };