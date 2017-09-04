// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResource)

// vue-resource拦截器
Vue.http.interceptors.push((request, next) => {
	next((response) => {
		if (response) {
			if (response.status === 200 && response.ok) {
				return response;
			}
			console.error(response);
			alert(response.url + ':' + response.status + ' - ' + response.statusText);
		}
	});
});


new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
})
