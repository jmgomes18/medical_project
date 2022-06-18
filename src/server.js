import { Model, Server } from 'miragejs'

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

            this.post('/auth/signin', (schema, request) => {
                let headers = {'Content-Type': 'application/json'}
                let user = request.requestBody
                console.log(schema.users.findBy({username: user.username}));
                //console.log(user)
                if (schema.users.findBy({ username: user.username, password: user.password })) {
                    return new Response(
                        201,
                        headers,
                        { message: `Success! ${user.username} you're now logged in` }
                    )
                }
                return new Response(
                    403,
                    headers,
                    { message: 'Unauthorized' }
                )
            }, { timing: 2000 })
        },
    })
}