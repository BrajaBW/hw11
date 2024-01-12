const app = require('../app')
const request = require('supertest')

describe('todo Routes',()=>{
    it('should return all todos get /todos',(done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .then (response=>{
            const firstData =  response.body[0]
            expect(firstData.title).toBe('belajar ayo')
            done()
        })
        .catch(done)
    })

    it('should create new todo /todos',(done)=>{
        request(app)
        .post('/todos')
        .send(
            {
            title :"belajar ayo",
            status : "active"
            }
        )     
        .expect(201)
        .then (response => {
            const data = response.body
            expect(data.title).toBe("belajar ayo")
            expect(data.status).toBe("active")
            done()
        })
        .catch(done)
    })

    it('should todos get by update /todos',(done)=>{
        const id = 9
        const data =  {
            status : 'inactive'
        }
        request(app)
        .delete(`/todos/${id}`)     
        .expect(201)
        .then (response=>{            
            expect(response.body.message).toBe("succes update")
            done()
        })
        .catch(done)
    })
    it('should todos get by id/todos',(done)=>{
        const id = 2       
        request(app)
        .get(`/todos/${id}`)     
        .expect(200)
        .then (response=>{
            expect(response.body.title).toBe("Belajar Squilize")
            expect(response.body.status).toBe("inactive")
            done()
        })
        .catch(done)
    })
})
