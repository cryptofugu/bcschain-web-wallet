// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Vuetify from 'vuetify'
import App from 'App'

import 'assets/css/vuetify.min.css'
import 'assets/less/bcs-icons.less'
import 'assets/css/material-icons.css'
import 'assets/css/main.css'

Vue.use(Vuetify)
Vue.use(VueClipboard)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(App).$mount('#app')
