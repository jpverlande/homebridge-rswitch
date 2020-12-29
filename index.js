// homebridge-rpi/index.js
// Copyright © 2019-2020 Erik Baauw. All rights reserved.
//
// Homebridge plugin for Raspberry Pi.

'use strict'

const RpiPlatform = require('./lib/RpiPlatform')
const packageJson = require('./package.json')

module.exports = function (homebridge) {
  RpiPlatform.loadPlatform(homebridge, packageJson, 'RPi-RSwitch', RpiPlatform)
}
