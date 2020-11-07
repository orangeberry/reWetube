import passport from "passport"
import GithubStrategy from "passport-github"
import GoogleStrategy from "passport-google"
import { githubLoginCallback, googleLogInCallback } from "./controllers/userController"
import User from "./models/User"
import routes from "./routes"


passport.use(User.createStrategy())

passport.use(
    new GithubStrategy(
        {
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:2000${routes.githubCallback}`
        },
    githubLoginCallback
    )
)

passport.use(
    new GoogleStrategy(
        {
            returnURL: 'http://localhost:2000/auth/google/return',
            realm: 'http://localhost:2000/'
        },
        googleLogInCallback
    )
)


passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())