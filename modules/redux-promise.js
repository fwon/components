'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/acdlite/redux-promise.git',
            version: '0.5.0',
            tag: 'master',
            name: 'redux-promise',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . redux-promise@0.1.1',
            dependencies: [
                "flux-standard-action@0.6.0"
            ],
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-promise\/lib\/(.*)$/,
                    release: 'lib/$1'
                },
                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ]
        }
    ]
})();
