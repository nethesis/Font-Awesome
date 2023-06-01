#!/bin/bash

# clean icons.json file
\cp add-icon-templates/icons.json icons.json

# loop all SVGs
for icon in ./*.svg; do
    echo "adding $icon..."
    node add-icon $icon
done