# FontAwesome - Nethesis Set - Solid
This is a collection of Nethesis icons in the `solid` set, based on FontAwesome.

## Install
To install this set execute:
```bash
npm i --save https://github.com/nethesis/Font-Awesome#ns-solid
```

## Use
To use the installed icons import the icon as a npm module:
```javascript
import { faHeadset } from '@nethesis/nethesis-solid-svg-icons'
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
  git commit -m "solid set. added new icon: faHeadsetName"
  ```

