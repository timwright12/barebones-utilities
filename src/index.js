import Focus from './utils/focus';
import getUrlParams from './utils/get-url-params';

if ( 'object' !== typeof window.Barebones ) {
	window.Barebones = {};
}

window.Barebones.Focus = Focus;
window.Barebones.getUrlParams = getUrlParams;
