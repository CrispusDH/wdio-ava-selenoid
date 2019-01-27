## Experiments with wdio v5, AVA and Selenoid
In this repo I try to run tests using wdio v5 as test framework and AVA as test runner in two options:
1) Locally
2) Using Selenoid (it should run each browser in container)

## Links
- [wdio v5](https://github.com/webdriverio/webdriverio)
- [AVA](https://github.com/avajs/ava)
- [Selenoid](https://github.com/aerokube/selenoid)

## How to run
1. **Run locally**. Just type: `npm run test`. It will:
- make cleanup `dist` folder
- up `chromedriver` (in future it could be obsolete, so I will replace it with new one)
- run `ava` with `options` for local running
2. **Run using Selenoid**. You need once run `npm run cm:install`. And after it just run `npm run avaselenoid`. It will:
- make clean up
- download and configure `Selenoid`
- run `ava` with `options` for running with `Selenoid`

## Issue with AVA - Selenoid
When I have one file with 3 tests - there is up and run three docker selenoid containers. It is `expected` behavior.
When I have two files with 6 tests - there is up just one docker selenoid container with 6 browsers inside. 
It is NOT expected behavior. I `expect` six docker selenoid containers.
So for 1 browser should be 1 docker container.