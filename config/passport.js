const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const Users = require('../model/users')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await Users.findUserById(payload.id)
      if (!user) {
        return done(new Error('User not found'))
      }
      if (!user.token) {
        return done(null, false)
      }
      return done(null, user)
    } catch (error) {
      return done(error)
    }
  })
)
