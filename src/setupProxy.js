const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/.netlify/functions/', {
            target: `http://localhost:${process.env.REACT_APP_FUNCTIONS_PORT}/`,
            pathRewrite: {
                '^/\\.netlify/functions': '',
            },
        })
    );
};
