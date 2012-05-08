##Sharing RequireJS modules

This example shows how to reuse code between the client and server. A typical use case would be to use the same validation logic for your models on both sides.

Feel free to use it as a basic template for your applications.

##Project structure
This backbone application is divided into a couple of AMD modules. A special shared module is used inside the node.js server. 
It is possible to test all modules using mocha and expect.js. (Examples included)

The Backbone app is inside the 'client' folder.
The server is inside the 'server' folder (obviously...).
Any module which should be shared between client and server is in the 'shared' folder and has to start with the amdefine wrapper.
The minified client app is in the 'client-build' folder. This folder gets deleted on every build.

##Usage
The following steps were tested with the following environment:

    MacOS 10.7.3
    Node.js 0.6.14
    npm 1.1.16

Check out this git repository:

    $ git clone git@github.com:NilsLattek/backbone-requirejs-node-boilerplate.git

Remove git history if you want to use this example as a template for your project:
    
    $ cd backbone-requirejs-node-boilerplate
    $ rm -rf .git

Install node.js if you haven't already: http://nodejs.org/

Install npm (should already be installed if you are using the latest node setup):

    $ curl http://npmjs.org/install.sh | sh

Install node packages for the node.js server:

    $ npm install .

Start the development server and navigate to 'http://localhost:8000':

    $ node server/server.js

Or use nodemon for watching your server files and automatically restart the server:

    $ npm install -g nodemon
    $ nodemon server/server.js

Run serverside and shared modules unittests:

    $ make test

Run clientside unittests:
    
    Open 'client-test-runner.html' in your browser. (TODO: it would be nice to run these along with the serverside tests in one command.) If you add more tests you have to adjust the client-test-runner.html file and list the new test files. This is not the optimal way and should be optimized...

Build (concatenate and minify) everything using r.js:
    
    $ cd bin
    $ ./build.sh

Start production environment (node will use the client-build folder with the minifed client app):

    $ NODE_ENV=production node server/server.js



###Roadmap
- Use r.js to optimize CSS files
- Provide a coffeescript version
- Add strict mode: "use strict";


###License
MIT license (of course).
