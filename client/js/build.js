({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../client-build",
    optimize: "uglify",
    //optimize: "none",
    //optimizeCss: "standard.keepLines",
    inlineText: true,
    findNestedDependencies: true,
    paths: {
        'zepto': 'libs/zepto/wrapper'
      , 'underscore': 'libs/underscore/wrapper'
      , 'backbone': 'libs/backbone/wrapper'
      , 'order': 'libs/require/order'
      , 'text': 'libs/require/text'
      , 'handlebars': 'libs/handlebars/wrapper'

    },
    modules: [
        {
            name: "libs/require/require"
        },

        {
            name: "main",
            //exclude: ["zepto"]
        }
    ]
})