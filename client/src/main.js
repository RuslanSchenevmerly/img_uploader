import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app";
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),

    created() {
        const firebaseConfig = {
            apiKey: "AIzaSyCsFkN4LS2WcUkup4seWu1v8g9ZPtgivB8",
            authDomain: "upload-img-27094.firebaseapp.com",
            projectId: "upload-img-27094",
            storageBucket : "upload-img-27094.appspot.com",
            messagingSenderId: "472754588927",
            appId: "1:472754588927:web:536025f72952a80c3a90ca"
        }

        firebase.initializeApp(firebaseConfig)
    }
}).$mount('#app')
