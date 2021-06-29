const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../controllers/controller');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes
            '/authenticate',
            '/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.get_byId(payload.sub);

    if (!user) { //if user no longer exists, revoke token
        return done(null, true);
    }

    done();
};