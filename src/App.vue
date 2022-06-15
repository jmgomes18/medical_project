<template>
    <router-view />
</template>

<script>
export default {
    mounted() {
        let dashboard = document.createElement('script')
        dashboard.setAttribute('src', 'template/assets/js/pages/dashboard.js')
        dashboard.async = true;
        return document.head.appendChild(dashboard)
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
