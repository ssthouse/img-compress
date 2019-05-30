#!/usr/bin/env node

const colors = require('colors')
const imageCompresser = require('../lib/image-compresser')

imageCompresser.compress('./test.png')