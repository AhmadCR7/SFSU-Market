module.exports = {
  apps : [{
    name: "www",
    script: "./dist-server/bin/www.js",
    watch: true,
    env: {
      NODE_ENV: "production",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
