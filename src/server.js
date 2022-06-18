
import { Model, Response, Server } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
    return new Server({
        environment,

        models: {
            users: Model,
        },

        seeds(server) {
            server.create("user", { name: "JS", username: "teste@teste.com", password: "123456" })
            server.create("user", { name: "Vue.js", username: "teste1@teste.com", password: "123456" })
        },

        routes() {

            this.namespace = "api"

            this.get("/users", (schema) => {
                return schema.users.all();
            })

            this.get("/admin", (schema) => {
                return schema.users.all();
            })

            this.post('/auth/signin', (schema, request) => {
                let headers = { 'Content-Type': 'application/json' }
                let attrs = JSON.parse(request.requestBody)

                let checkUser = schema.users.findBy({ username: attrs.username, password: attrs.password })
                if (!checkUser) {
                    return new Response(
                        400,
                        headers,
                        { message: 'Invalid Credentials' }
                    )
                }
                return new Response(
                    200,
                    headers,
                    {
                        username: attrs.username,
                        password: attrs.password,
                        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlQHRlc3RlLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2In0.Na0UMsy-zNb5pFhPICNA386-CeC6krS0wQ-_3FI4vEg"
                    }
                )
            }, { timing: 2000 })
        },
    })
}