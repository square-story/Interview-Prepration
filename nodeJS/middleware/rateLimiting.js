import { Router } from 'express'
const rateLimitingStore = new Map()
const RATELIMIT = 5
const WINDOW_TIME = 60 * 1000;//1 minute
export const rateLimiting = (req, res, next) => {
    const ip = req.ip;
    const currentTime = new Date()
    if (!rateLimitingStore.has(ip)) {
        rateLimitingStore.set(ip, {
            count: 1,
            startTime: currentTime
        })
        return next()
    }
    //reset timer after 1 minute
    const userData = rateLimitingStore.get(ip)
    if (currentTime - userData.startTime > WINDOW_TIME) {
        rateLimitingStore.set(ip, {
            count: 1,
            startTime: currentTime
        })
        return next()
    }

    if (userData.count > RATELIMIT) {
        res.status(429).json("too many request")
    }

    userData.count++
    rateLimitingStore.set(ip, userData)
    next()
}