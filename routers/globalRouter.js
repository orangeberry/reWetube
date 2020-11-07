import express from "express"
import passport from "passport"
import { getJoin, logout,getLogin,postLogin, postJoin, githubLogin, postGithubLogIn, googleLogin, postGoogleLogIn } from "../controllers/userController"
import { home, search } from "../controllers/videoController"
import { onlyPrivate, onlyPublic } from "../middlewares"
import routes from "../routes"

const globalRouter = express.Router()

globalRouter.get(routes.join, onlyPublic, getJoin)
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin)

globalRouter.get(routes.login, onlyPublic, getLogin)
globalRouter.post(routes.login, onlyPublic, postLogin)


globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)

globalRouter.get(routes.logout, onlyPrivate, logout)

globalRouter.get(routes.github, githubLogin)
globalRouter.get(routes.githubCallback,
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGithubLogIn
)

globalRouter.get(routes.google, googleLogin)
globalRouter.get(routes.googleCallback, passport.authenticate('google', { failureRedirect: '/login' }),
postGoogleLogIn
)

export default globalRouter

