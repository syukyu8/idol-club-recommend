#!/bin/bash

set -o pipefail
set -e

./node_modules/.bin/serve -s build -p 1234 -n &
TEST_SERVER_PID=$!

if [ -n "$CI" ]; then
  echo "Run E2E test on CI environment"
  ./node_modules/.bin/cypress run --record --browser chrome
else
  echo "Run E2E test on local environment"
  ./node_modules/.bin/cypress run --browser chrome
fi

kill -SIGINT $TEST_SERVER_PID
