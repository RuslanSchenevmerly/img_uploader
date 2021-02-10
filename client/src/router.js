import Vue from 'vue'
import Router from 'vue-router'
import ImageUploaderApp from "@/views/ImageUploaderApp";
import App from "@/App";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/upload',
            component: ImageUploaderApp
        },
        {
            path: '/gallery',
            component: () => import("@/views/GalleryApp")
        }
    ]
})