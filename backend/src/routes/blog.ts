import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()


blogRouter.use('/*', async (c, next) => {

    const token = c.req.header("authorization") || ""

    if (!token) {
        c.status(403)
        return c.json({ error: "unauthorized" })
    }

    // const token = jwt.split("")[1]

    const payload = await verify(token, c.env.JWT_SECRET)

    if (!payload) {
        c.status(403)
        return c.json({ error: 'unauthorized' })
    }

    c.set('userId', payload.id)

    await next()

})


blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(userId)
            }
        })

        return c.json({
            id: blog.id
        })

    } catch (error) {
        c.status(400)
        return c.json({ error: 'Invalid Parameter' })
    }
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({
            id: blog.id
        })

    } catch (error) {
        console.log(error)
        c.status(400)
        return c.json({ error: 'Invalid Parameter' })
    }
})

// TODO: add pagination
blogRouter.get('/bulk', async (c) => {
    const body = c.req.json()

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {

        const blog = await prisma.blog.findMany()

        return c.json({
            blog
        })

    } catch (error) {
        console.log(error)
        c.status(400)
        return c.json({ error: 'Invalid Parameter' })
    }
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: parseInt(id)
            }
        })

        return c.json({
            blog
        })

    } catch (error) {
        console.log(error)
        c.status(400)
        return c.json({ error: 'Error while fetching the blog' })
    }
})
