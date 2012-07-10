#!/bin/bash

# thanks to https://github.com/mozilla/BrowserQuest

BUILDDIR="../client-build"
PROJECTDIR="../client/js"
SHAREDDIR="../shared"
CURDIR=$(pwd)


echo "Deleting previous build directory"
rm -rf $BUILDDIR

echo "Creating build directory"
mkdir $BUILDDIR

echo "Copy over shared modules"
cp -r $SHAREDDIR/* $BUILDDIR

echo "Building client with RequireJS"
cd $PROJECTDIR
node ../../bin/r.js -o build.js
cd $CURDIR

echo "Removing unnecessary js files from the build directory"
find $BUILDDIR/js -type f -not \( -name "main.js" -o -name "require.js" \) -delete
find $BUILDDIR/css -type f -not \( -name "index.css" \) -delete

echo "Removing collections directory"
rm -rf $BUILDDIR/js/collections

echo "Removing models directory"
rm -rf $BUILDDIR/js/models

echo "Removing routers directory"
rm -rf $BUILDDIR/js/routers

echo "Removing templates directory"
rm -rf $BUILDDIR/js/templates

echo "Removing views directory"
rm -rf $BUILDDIR/js/views

echo "Removing css directories"
rm -rf $BUILDDIR/css/layout
rm -rf $BUILDDIR/css/views

echo "Moving build.txt to current dir"
mv $BUILDDIR/build.txt $CURDIR

echo "Build complete"