<template>
    <router-view />
</template>

<script>
import EventBus from "./common/EventBus";
export default {
    mounted() {
        EventBus.on("logout", () => {
            this.logOut();
        });

        let dashboard = document.createElement('script');
        dashboard.setAttribute('src', 'template/assets/js/pages/dashboard.js');
        dashboard.async = true;
        return document.head.appendChild(dashboard);
    },
    beforeUnmount() {
        EventBus.remove("logout");
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
