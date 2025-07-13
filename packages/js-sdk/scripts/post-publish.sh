#!/usr/bin/env bash

npm pkg set 'name'='@neopilot/sdk'
npm publish --no-git-checks
npm pkg set 'name'='neopilot'
npm deprecate "@neopilot/sdk@$(npm pkg get version | tr -d \")" "The package @neopilot/sdk has been renamed to neopilot. Please uninstall the old one and install the new by running following command: npm uninstall @neopilot/sdk && npm install neopilot"
