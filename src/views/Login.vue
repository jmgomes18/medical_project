<template>
    <title>Login - Mazer Admin Dashboard</title>

    <body>
        <div id="auth">
            <div class="row h-100">
                <div class="col-lg-5 col-12">
                    <div id="auth-left">
                        <div class="auth-logo">
                            <a href="index.html"><img src="template/assets/images/logo/logo.svg" alt="Logo"></a>
                        </div>
                        <h1 class="auth-title">Log in.</h1>
                        <p class="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>

                        <Form @submit="handleLogin" :validation-schema="schema">
                            <div class="form-group position-relative has-icon-left mb-4">
                                <Field name="username" type="text" class="form-control form-control-xl"
                                    placeholder="Username" />
                                <div class="form-control-icon">
                                    <i class="bi bi-person"></i>
                                </div>
                                <ErrorMessage name="username" class="error-feedback" />
                            </div>
                            <div class="form-group position-relative has-icon-left mb-4">
                                <Field name="password" type="password" class="form-control form-control-xl"
                                    placeholder="Password" />
                                <div class="form-control-icon">
                                    <i class="bi bi-shield-lock"></i>
                                </div>
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>
                            <div class="form-check form-check-lg d-flex align-items-end">
                                <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label text-gray-600" for="flexCheckDefault">
                                    Keep me logged in
                                </label>
                            </div>
                            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
                            <div v-if="message" class="alert alert-danger" role="alert">
                                {{ message }}
                            </div>
                        </Form>
                        <div class="text-center mt-5 text-lg fs-4">
                            <p class="text-gray-600">Don't have an account? <a href="auth-register.html"
                                    class="font-bold">Sign
                                    up</a>.</p>
                            <p><a class="font-bold" href="auth-forgot-password.html">Forgot password?</a>.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 d-none d-lg-block">
                    <div id="auth-right">

                    </div>
                </div>
            </div>

        </div>
    </body>
</template>
<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
export default {
    name: "Login",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            username: yup.string().required("Username is required!"),
            password: yup.string().required("Password is required!"),
        });
        return {
            loading: false,
            message: "",
            schema,
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        fetch('/api/users')
            .then(res => res.json())
            .then(json => {
                this.users = json
            })
        if (this.loggedIn) {
            //this.$router.push("/admin");
        }
    },
    methods: {
        handleLogin(user) {
            fetch('api/auth/signin', { method: 'post', body: user })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            this.loading = true;
            this.$store.dispatch("auth/login", user).then(
                () => {
                    this.$router.push("/admin");
                },
                (error) => {
                    this.loading = false;
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        },
    },
};
</script>