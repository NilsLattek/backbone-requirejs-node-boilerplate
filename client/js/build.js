({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../client-build",
    mainConfigFile: 'main.js',
    optimize: "uglify",
    //optimize: "none",
    //optimizeCss: "standard.keepLines",
    inlineText: true,
    findNestedDependencies: true,
    paths: {
        'zepto': 'libs/zepto'
      , 'underscore': 'libs/underscore'
      , 'backbone': 'libs/backbone'
      , 'text': 'libs/require/text'
      , 'handlebars': 'libs/handlebars'

    },
    modules: [
        {
            name: "libs/require/require"
        },

        {
            name: "main"
        }
    ]
})