#!/usr/bin/env bash

cd $(dirname $0)
TEST_DIR=$(pwd)

BABEL_CACHE_DIR=${TEST_DIR}/.cache
export BABEL_CACHE_DIR

${TEST_DIR}/../node_modules/mocha/bin/mocha \
    --reporter spec \
    --full-trace \
    --compilers js:meteor-babel/register \
    tests.js
