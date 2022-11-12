module.exports = {
    apps: [{
        name: "external",
        script: "./server.js",
        exec_mode: 'cluster',
        instances: 2
    }]
}