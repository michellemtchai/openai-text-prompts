#!/bin/sh
function yarn_install(){
    echo "yarn install at $1"
    cd ".$1"
    yarn --no-bin-links install
}

yarn_install /
react-scripts start
