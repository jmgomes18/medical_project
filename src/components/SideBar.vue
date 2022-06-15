<template>
    <div id="sidebar" class="active">
        <div class="sidebar-wrapper active">
            <div class="sidebar-header position-relative">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <a href="index.html"><img src="template/assets/images/logo/logo.svg" alt="Logo" srcset=""></a>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <li class="sidebar-title">Menu</li>

                    <li class="sidebar-item active ">
                        <a href="index.html" class='sidebar-link'>
                            <i class="bi bi-grid-fill"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="sidebar-item  has-sub">
                        <a href="#" class='sidebar-link '>
                            <i class="bi bi-collection-fill "></i>
                            <span>Extra Components</span>
                        </a>
                        <ul class="submenu ">
                            <li class="submenu-item ">
                                <a href="extra-component-avatar.html">Avatar</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="extra-component-sweetalert.html">Sweet Alert</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="extra-component-toastify.html">Toastify</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="extra-component-rating.html">Rating</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="extra-component-divider.html">Divider</a>
                            </li>
                        </ul>
                    </li>

                    <li class="sidebar-item  ">
                        <a href="application-gallery.html" class='sidebar-link'>
                            <i class="bi bi-image-fill"></i>
                            <span>Photo Gallery</span>
                        </a>
                    </li>

                    <li class="sidebar-item  ">
                        <a href="application-checkout.html" class='sidebar-link'>
                            <i class="bi bi-basket-fill"></i>
                            <span>Checkout Page</span>
                        </a>
                    </li>

                    <li class="sidebar-item  has-sub">
                        <a href="#" class='sidebar-link'>
                            <i class="bi bi-person-badge-fill"></i>
                            <span>Authentication</span>
                        </a>
                        <ul class="submenu ">
                            <li class="submenu-item ">
                                <a href="auth-login.html">Login</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="auth-register.html">Register</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="auth-forgot-password.html">Forgot Password</a>
                            </li>
                        </ul>
                    </li>

                    <li class="sidebar-item  has-sub">
                        <a href="#" class='sidebar-link'>
                            <i class="bi bi-x-octagon-fill"></i>
                            <span>Errors</span>
                        </a>
                        <ul class="submenu ">
                            <li class="submenu-item ">
                                <a href="error-403.html">403</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="error-404.html">404</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="error-500.html">500</a>
                            </li>
                        </ul>
                    </li>

                    <li class="sidebar-title">Administrativo</li>

                    <li class="sidebar-item has-sub">
                        <div v-for="folder in folders" :key="folder">
                            <a href="#" class='sidebar-link'>
                                <i class="bi bi-collection-fill"></i>
                                <span @click="toggle(folder.name)"> {{ folder.name }}</span>
                            </a>
                            <ul class="submenu" v-show="false" :id="folder.name">
                                <li class="submenu-item" v-for="page in folder.pages" :key="page"
                                    style="margin-left: 20px;">
                                    <a>{{ page.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="sidebar-title">Administrativo</li>

                    <li class="sidebar-item has-sub">
                        <div v-for="folder in teste" :key="folder">
                            <a href="#" class='sidebar-link'>
                                <i class="bi bi-collection-fill"></i>
                                <span @click="toggle(folder.name)"> {{ folder.name }}</span>
                            </a>
                            <ul class="submenu" v-show="false" :id="folder.name">
                                <li class="submenu-item" v-for="page in folder.pages" :key="page"
                                    style="margin-left: 20px;">
                                    <a>{{ page.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            folders: [
                { name: 'Search Engine', pages: [{ name: 'Google' }, { name: 'Yahoo!' }, { name: 'goo!' }] },
                { name: 'SNS', pages: [{ name: 'Facebook' }, { name: 'Twitter' }, { name: 'Google+' }, { name: 'mixi' }] },
                { name: 'Shipping', pages: [{ name: 'Amazon' }, { name: 'ebay' }] }
            ],
            teste: [
                { name: 'Engine', pages: [{ name: 'Google' }, { name: 'Yahoo!' }, { name: 'goo!' }] },
                { name: 'Menu', pages: [{ name: 'Facebook' }, { name: 'Twitter' }, { name: 'Google+' }, { name: 'mixi' }] },
                { name: 'Dropdown', pages: [{ name: 'Amazon' }, { name: 'ebay' }] }
            ]
        }
    },
    methods: {
        toggle: function (idname) {
            if (document.getElementById(idname).style.display == "none") {
                document.getElementById(idname).style.display = "inline";
            } else {
                document.getElementById(idname).style.display = "none";
            }
        },
    }
}
</script>

<style>
</style>