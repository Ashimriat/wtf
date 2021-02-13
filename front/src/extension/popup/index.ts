import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import PopupApp from './PopupApp';

const appContainer = document.getElementById('app');
new Vue({
	el: appContainer,
	render: h => h(PopupApp)
});
