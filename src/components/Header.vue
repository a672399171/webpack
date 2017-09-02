<template>
    <header class="app-header navbar">
        <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
            &#9776;
        </button>
        <b-link class="navbar-brand" to="#"></b-link>
        <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;
        </button>
        <b-nav is-nav-bar class="ml-auto">
            <b-nav-item-dropdown right>
                <template slot="button-content">
                    <img src="static/img/avatars/6.jpg" class="img-avatar">
                    <span class="d-md-down-none">admin</span>
                </template>
                <b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>
                <b-dropdown-item><i class="fa fa-lock"></i> Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </header>
</template>
<script>
    export default {
        name: 'header',
        methods: {
            sidebarMinimize(e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-minimized')
            },
            mobileSidebarToggle(e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-mobile-show')
            }
        }
    }
</script>
