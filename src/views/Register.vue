<template>
    <div id="auth">

        <div class="row h-100">
            <div class="col-lg-5 col-12">
                <div id="auth-left">
                    <div class="auth-logo">
                        <a href="index.html"><img src="template/assets/images/logo/logo.svg" alt="Logo"></a>
                    </div>
                    <h1 class="auth-title">Sign Up</h1>
                    <p class="auth-subtitle mb-5">Input your data to register to our website.</p>

                    <Form @submit="handleRegister" :validation-schema="schema">
                        <div class="form-group position-relative has-icon-left mb-4">
                            <Field name="username" type="text" class="form-control form-control-xl" placeholder="Email" />
                            <div class="form-control-icon">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <ErrorMessage name="email" class="error-feedback" />
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <Field name="password" type="password" class="form-control form-control-xl"
                                placeholder="Password" />
                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                            <ErrorMessage name="password" class="error-feedback" />
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <Field name="confirm_password" type="password" class="form-control form-control-xl"
                                placeholder="Confirm Password" />
                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                            <ErrorMessage name="confirm_password" class="error-feedback" />
                        </div>
                        <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5" :disabled="loading">Sign
                            Up</button>
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                    </Form>
                    <div v-if=" message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                        {{ message }}
                    </div>
                    <div class="text-center mt-5 text-lg fs-4">
                        <p class='text-gray-600'>Already have an account? <a href="auth-login.html"
                                class="font-bold">Log
                                in</a>.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 d-none d-lg-block">
                <div id="auth-right">

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            username: yup
                .string()
                .required("Email is required!")
                .email("Email is invalid!")
                .max(50, "Must be maximum 50 characters!"),
            password: yup
                .string()
                .required("Password is required!")
                .min(6, "Must be at least 6 characters!")
                .max(40, "Must be maximum 40 characters!"),
            confirm_password: yup
                .string()
                .required("You must confirm your password!")
                .oneOf([yup.ref('password'), null], 'Passwords must match')
                .min(6, "Must be at least 6 characters!")
                .max(40, "Must be maximum 40 characters!"),
        });
        return {
            successful: false,
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
    mounted() {
        fetch('/api/users')
            .then(res => res.json())
            .then(json => {
                this.users = json
            })
        if (this.loggedIn) {
            this.$router.push("/login");
        }
    },
    methods: {
        handleRegister(user) {
            this.message = "";
            this.successful = false;
            this.loading = true;
            this.$store.dispatch("auth/register", user).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
    },

}
</script>

<style>

</style>