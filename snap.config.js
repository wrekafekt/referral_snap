module.exports = {
    input: './src/index.js',  // Entry point for the Snap
    output: {
      path: './dist',
      filename: 'bundle.js',
    },
    server: {
      port: 8080,
      root: './dist',
    },
  };
  