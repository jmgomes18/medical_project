<template>

    <body>
        <SideBar />
        <div id="main">
            <div class="page-content">
                <section class="row">
                    <div class="col-12 col-lg-9">
                        <MetricCards />
                        <div class="row">
                            <div class="col-12">
                                <chart-attendance />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="card">
                            <div class="card-body py-4 px-5">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img src="template/assets/images/faces/1.jpg" alt="Face 1">
                                    </div>
                                    <div class="ms-3 name">
                                        <h5 class="font-bold">John Duck</h5>
                                        <h6 class="text-muted mb-0">@johnducky</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>Recent Messages</h4>
                            </div>
                            <div class="card-content pb-4">
                                <div v-if="serverError" data-testid="server-error">
                                    {{ serverError }}
                                </div>
                                <div class="recent-message d-flex px-4 py-3">
                                    <div class="avatar avatar-lg">
                                        <img src="template/assets/images/faces/4.jpg">
                                    </div>
                                    <div class="name ms-4">
                                        <h5 class="mb-1">Hank Schrader</h5>
                                        <h6 class="text-muted mb-0">@johnducky</h6>
                                    </div>
                                </div>
                                <div class="recent-message d-flex px-4 py-3">
                                    <div class="avatar avatar-lg">
                                        <img src="template/assets/images/faces/5.jpg">
                                    </div>
                                    <div class="name ms-4">
                                        <h5 class="mb-1">Dean Winchester</h5>
                                        <h6 class="text-muted mb-0">@imdean</h6>
                                    </div>
                                </div>
                                <div class="recent-message d-flex px-4 py-3">
                                    <div class="avatar avatar-lg">
                                        <img src="template/assets/images/faces/1.jpg">
                                    </div>
                                    <div class="name ms-4">
                                        <h5 class="mb-1">John Dodol</h5>
                                        <h6 class="text-muted mb-0">@dodoljohn</h6>
                                    </div>
                                </div>
                                <div class="px-4">
                                    <button class='btn btn-block btn-xl btn-outline-primary font-bold mt-3'
                                        @click.prevent="logOut">
                                        Start Conversation
                                    </button>
                                </div>
                            </div>
                        </div>
                        <PizzaChart />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    </body>
</template>

<script>
import ChartAttendance from '@/components/ChartAttendance.vue';
import SideBar from '@/components/SideBar.vue';
import EventBus from "../common/EventBus";
import Footer from '../components/Footer.vue';
import MetricCards from '../components/MetricCards.vue';
import PizzaChart from '../components/PizzaChart.vue';
import UserService from '../services/user.service';

export default {
    name: "MainView",
    components: { SideBar, MetricCards, ChartAttendance, Footer, PizzaChart },
    data() {
        return {
            users: [],
            serverError: null,
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/');
        }
        UserService.getAdminBoard().then(
            response => { this.content = response.data;},
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            }
        );
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/');
        }
    }
}
</script>

