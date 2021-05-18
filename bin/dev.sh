#!/bin/bash

cd $(readlink -f $0 | xargs dirname)/..

mkdir -p dist
rm -r dist/* > /dev/null
cp -r public/* dist/

deno run --allow-read --allow-env --allow-net --allow-write --allow-run ./bin/dev.js
