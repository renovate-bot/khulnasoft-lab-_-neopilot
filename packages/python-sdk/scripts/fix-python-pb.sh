#!/bin/bash

rm -rf neopilot/envd/__pycache__
rm -rf neopilot/envd/filesystem/__pycache__
rm -rf neopilot/envd/process/__pycache__

sed -i.bak 's/from\ process\ import/from neopilot.envd.process import/g' neopilot/envd/process/* neopilot/envd/filesystem/*
sed -i.bak 's/from\ filesystem\ import/from neopilot.envd.filesystem import/g' neopilot/envd/process/* neopilot/envd/filesystem/*

rm -f neopilot/envd/process/*.bak
rm -f neopilot/envd/filesystem/*.bak
