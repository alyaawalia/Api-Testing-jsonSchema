import axios from "axios"
import expect from "../Expect.js"
import { GetSchema, PutSchema, PostSchema, Deleteschema} from "../Schema.js"


describe('GET Api Testing jsonSchema', function () {
    it('1. Get Api Todos/1', async function () {
        const res = await axios.get('https://dummyjson.com/todos/1')

        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(GetSchema)

    })
})

describe('POST Api Testing jsonSchema', function () {
    it('2. Post Api Todos/Add', async function () {
        const newData = { 
            todo: 'New Todo', 
            userId: 8 
        }

        try {
        const res = await axios.post('https://dummyjson.com/todos/add', newData)
            
            expect(res.status).to.equal(200)
            expect(res.data).to.be.jsonSchema(PostSchema)
            expect(res.data.todo).to.equal(newData.todo)
            expect(res.data.completed).to.equal(newData.completed)

        } catch (error) { //AxiosError: Request failed with status code 400
            if (error.response && error.response.status === 400) {
                console.error('Permintaan tidak valid:', error.response.data)
            throw error
            }
        }
    })
})

describe('PUT Api Testing jsonSchema', function () {
    it('3. Put Api Todos/1', async function () {
        const updateData = { 
            todo: 'Updated Todo', 
            completed: true 
        }
        const res = await axios.put('https://dummyjson.com/todos/1', updateData)

        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(PutSchema)
        expect(res.data.todo).to.equal(updateData.todo)
        expect(res.data.completed).to.equal(updateData.completed)
    })
})

describe('DELETE Api Testing jsonSchema', function () {
    it('4. Delete Api Todos/1', async function () {
        const res = await axios.delete('https://dummyjson.com/todos/1');

        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(Deleteschema)
    })
})
