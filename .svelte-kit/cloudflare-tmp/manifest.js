export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-3b88a3b3.js","js":["start-3b88a3b3.js","chunks/vendor-069a40fc.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/search\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/movie\/?$/,
				params: null,
				path: "/movie",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/movie\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		]
	}
};

export const prerendered = new Set([]);
