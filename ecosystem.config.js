module.exports = {
  apps: [
    {
      name: 'NandY',
      script: '././bin/www',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
};
