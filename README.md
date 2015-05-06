# moment-relative

[![Build Status](https://travis-ci.org/bbc/moment-relative.svg?branch=master)](https://travis-ci.org/bbc/moment-relative) [![Code Climate](https://codeclimate.com/github/bbc/moment-relative/badges/gpa.svg)](https://codeclimate.com/github/bbc/moment-relative)

> Support for Graphite-style relative time strings in Moment.js

## Installation

```
npm install moment-relative
```

## Usage

```js
var moment = require('moment-relative');

var now = moment();
var someTimeAgo = now.relative('-5d3h5m');
// equivalent of now.subtract(5, 'days').subtract(3, 'hours').subtract(5, 'minutes');
```

### Supported units

|Unit|Description|
|----|-----------|
|d|Days|
|h|Hours|
|m|Minutes|
