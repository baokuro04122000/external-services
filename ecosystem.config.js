module.exports = {
    apps: [{
        name: "external",
        script: "./server.js",
        exec_mode: 'cluster',
        instances: 2,
        watch: true,
        ignore_watch: ["node_modules"],
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]
}