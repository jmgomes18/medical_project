import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
    return new Server({
        environment,

        models: {
            users: Model,
        },

        seeds(server) {
            server.create("user", { name: "JS", email: "teste@teste.com", password: "123456" })
            server.create("user", { name: "Vue.js", email: "teste@teste.com", password: "123456" })
        },

        routes() {

            this.namespace = "api"

            this.get("/users", schema => {
                return schema.users.all()
            })

        },
    })
}