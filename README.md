# FontAwesome - Nethesis Set - Light
This is a collection of Nethesis icons in the `light` set, based on FontAwesome.

## Install
To install this set execute:
```bash
npm i --save https://github.com/nethesis/Font-Awesome#light
```

## Use
To use the installed icons import the icon as a npm module:
```javascript
import { faHeadset } from '@nethesis/nethesis-light-svg-icons'
```

## Add new icon
To add a new icon to the set follow the steps below:
- make you sure you have a valid SVG in `24x24` size
- name the file in kebab-case, for example: `headset-name.svg`
- execute this command:
  ```bash
  node add-icon.js headset-outline.svg
  ```
- commit using this message and naming the icon using `fa` prefix: 
  ```bash
  git commit -m "light set. added new icon: faHeadsetName"
  ```

