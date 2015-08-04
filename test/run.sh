#!/usr/bin/env bash

cd $(dirname $0)
TEST_DIR=$(pwd)

${TEST_DIR}/../node_modules/mocha/bin/mocha \
    --reporter spec \
    --full-trace \
    tests.js
