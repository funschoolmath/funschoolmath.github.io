var cacheName = 'v1:static';
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll([
				'./',
				'./dist/bundle.js',
				'./images/favicon.png',
				'./images/logo.svg',
				'./images/logo-colors.png',
				'./images/icons/animation.svg',
				'./images/icons/blur.svg',
				'./images/icons/bold.svg',
				'./images/icons/brush.svg',
				'./images/icons/bulge_pinch.svg',
				'./images/icons/clone.svg',
				'./images/icons/crop.svg',
				'./images/icons/delete.svg',
				'./images/icons/desaturate.svg',
				'./images/icons/erase.svg',
				'./images/icons/external.png',
				'./images/icons/fill.svg',
				'./images/icons/gradient.png',
				'./images/icons/grid.png',
				'./images/icons/italic.svg',
				'./images/icons/magic_erase.svg',
				'./images/icons/media.svg',
				'./images/icons/menu.svg',
				'./images/icons/pencil.svg',
				'./images/icons/pick_color.svg',
				'./images/icons/refresh.svg',
				'./images/icons/select.svg',
				'./images/icons/selection.svg',
				'./images/icons/shape.svg',
				'./images/icons/sharpen.svg',
				'./images/icons/strikethrough.svg',
				'./images/icons/text.svg',
				'./images/icons/underline.svg',
				'./images/icons/view.svg'
			]).then(function() {
				self.skipWaiting();
			});
		})
	);
});
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
