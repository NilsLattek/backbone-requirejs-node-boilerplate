({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../client-build",
    keepBuildDir: true,
    mainConfigFile: 'main.js',
    optimize: "uglify",
    //optimize: "none",
    optimizeCss: "standard", //standard.keepLines
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