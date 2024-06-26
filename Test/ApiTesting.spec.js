import axios from "axios"
import expect from "../Expect.js"
import { GetSchema, PutSchema, PostSchema, Deleteschema} from "../Schema.js"


describe('Api Testing jsonSchema mochawesome', function () {
    it('Get Api Todos/1', async function () {
        const res = await axios.get('https://dummyjson.com/todos/1')

        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(GetSchema)

    })
})

//describe('POST Api Testing jsonSchema', function () {
    it('Post Api Todos/Add', async function () {
        const newData = { 
            todo: 'New Todo Alya Awalia', 
            userId: 8
        }

        try {
        const res = await axios.post('https://dummyjson.com/todos/add', newData)
            
            expect(res.status).to.equal(200)
            expect(res.data).to.be.jsonSchema(PostSchema)
            expect(res.data).to.equal(newData)

        } catch (error) { //AxiosError: Request failed with status code 400
            if (error.response && error.response.status === 400) {
                console.error('Permintaan tidak valid:', error.response.data)
            throw error
            }
        }
    })
//})

//describe('PUT Api Testing jsonSchema', function () {
    it('Put Api Todos/1', async function () {
        const updateData = { 
            todo: 'Updated Todo Alya Awalia', 
            completed: true,
            //id: 4
        }
        try {

        const res = await axios.put('https://dummyjson.com/todos/1', updateData)

        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(PutSchema)
        //expect(res.data.todo).to.equal(updateData.todo)
        expect(res.data).to.equal(updateData.updateData)

    } catch (error) { //AxiosError: Request failed with status code 404
        if (error.response && error.response.status === 404) {
            console.error('Data Tidak Ditemukan:', error.response.data)
        throw error
        }
    }
    })
//})

//describe('DELETE Api Testing jsonSchema', function () {
    it('Delete Api Todos/1', async function () {
        const res = await axios.delete('https://dummyjson.com/todos/1')

        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(Deleteschema)
    })
//})
