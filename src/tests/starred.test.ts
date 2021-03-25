import request from 'supertest'
import app from '../app'

import { getConnection, createConnection } from 'typeorm'

// Mock Data
const REACTJS_REPO = {
    user_id: '3c57b9c4-6305-4239-912f-c494aa5c2f8d',
    repo_id: '000001',
    tags: 'ReactJS',
    description: 'React JS - Frontend',
    name: 'Repositorio React Web',
    url: 'https://github.com/facebook/react'
}

const FLUTTER_REPO = {
    user_id: '91ee2d8c-cb37-467d-9b30-01c2fbe9324b',
    repo_id: '000003',
    tags: 'Flutter',
    description: 'Flutter Mobile',
    name: 'Flutter',
    url: 'https://github.com/flutter/flutter'
}

const REACT_ID = '9d7cb784-70c9-4d67-bb31-827faa60ee9a'
const FLUTTER_ID = '22d38a4a-94f4-4390-afca-80eb6b90c775'

describe('tags', () => {

    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    // Manual transactions 😂😞
    beforeEach(async () => {
        const connection = getConnection()
        await connection.query(`
            INSERT INTO starred (id, name, user_id, repo_id, tags, description, url)
            VALUES (
                '9d7cb784-70c9-4d67-bb31-827faa60ee9a',
                'Repositorio React Web',
                '3c57b9c4-6305-4239-912f-c494aa5c2f8d',
                '000001',
                'ReactJS',
                'React JS - Frontend',
                'https://github.com/facebook/react'
            );
        `)

        await connection.query(`
            INSERT INTO starred (id, name, user_id, repo_id, tags, description, url)
            VALUES (
                '22d38a4a-94f4-4390-afca-80eb6b90c775',
                'Flutter',
                '91ee2d8c-cb37-467d-9b30-01c2fbe9324b',
                '000003',
                'Flutter',
                'Flutter Mobile',
                'https://github.com/flutter/flutter'
            );
        `)
    })

    afterEach(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM starred')
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.dropDatabase()
        await connection.close()
    })

    it('should be create tags', async () => {
        const starredToCreate = {
            ...REACTJS_REPO,
            user_id: '91ee2d8c-cb37-467d-9b30-01c2fbe9324b'
        }

        const { body, status } = await request(app)
            .post('/starred-repositories')
            .send(starredToCreate)

        expect(body).toMatchObject(starredToCreate)
        expect(status).toBe(200)
    })

    it('should\'t be create duplicate tags', async () => {
            const newRepo = {
            ...FLUTTER_REPO,
            description: 'LinkedIn is awesome',
            url: 'https://github.com/linkedin/datahub'
        }

        const { body, status } = await request(app)
            .post('/starred-repositories').send(newRepo)

        expect(body).toMatchObject({
            message: { statusCode: 400, message: 'This tag already exists.' }
        })

        expect(status).toBe(400)
    })

    it('should be update a tag', async () => {
        const newTag = 'React JavaScript Web'

        const { body: bodyResponse, status} = await request(app)
            .put('/starred-repositories')
            .send({ tags: newTag, id: FLUTTER_ID })

        expect(bodyResponse).toMatchObject({
            ...FLUTTER_REPO,
            tags: newTag
        })

        expect(status).toBe(200)
    })


    it('should be remove a tag', async () => {
        const response = await request(app)
            .delete(`/starred-repositories/${REACT_ID}`)

        expect(response.body).toMatchObject({ message: 'Deleted with success.' })

        expect(response.status).toBe(200)
    })

    it('should find list with all user tags', async () => {
        const response = await request(app)
            .get(`/starred-repositories/${REACTJS_REPO.user_id}`)

        expect(response.body).toMatchObject([REACTJS_REPO])
        expect(response.status).toBe(200)
    })

    it('should be able to filter repositories by tags', async () => {
        const filter = 'React'
        const response = await request(app)
            .get(`/starred-repositories/${REACTJS_REPO.user_id}/${filter}`)

        expect(response.body).toMatchObject([REACTJS_REPO])
        expect(response.status).toBe(200)
    })

    it('should find all repositories list', async () => {
        const response = await request(app).get('/starred-repositories')

        expect(response.body).toMatchObject([
            { ...REACTJS_REPO, id: REACT_ID },
            { ...FLUTTER_REPO, id: FLUTTER_ID }
        ])

        expect(response.status).toBe(200)
    })

})
