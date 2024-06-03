export const GetSchema = {
    type: 'object',
    required: ['id', 'userId', 'todo', 'completed'],
    properties: {
        id: { type: 'number'},
        userId: { type: 'number'},
        todo: { type: 'string'},
        completed: { type: 'boolean'},
    }
}

export const PostSchema = {
    type: 'object',
    required: ['id', 'userId', 'todo', 'completed'],
    properties: {
        id: { type: 'number' },
        userId: { type: 'number' },
        todo: { type: 'string' },
        completed: { type: 'boolean' }
    }
}
// kenapa kalo ditulis items: PostSchema
//muncul strict mode: missing type "array" for keyword "items" at "#" (strictTypes).

export const PutSchema = {
    type: 'object',
    required: ['id', 'userId', 'todo', 'completed'], //berarti properti didalamnya wajib ada untuk diuji 
    properties: {
        id: { type: 'number' },
        userId: { type: 'number' },
        todo: { type: 'string' },
        completed: { type: 'boolean' }
    }
}


export const Deleteschema = {
    type: 'object',
    properties: {}
}