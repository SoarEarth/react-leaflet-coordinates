# react-leaflet-coordinate

> A react-leaflet control to display the coordinates under the cursor

[![NPM](https://img.shields.io/npm/v/rreact-leaflet-box-zoom.svg)](https://www.npmjs.com/package/react-leaflet-coordinate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### About

A react-leaflet control to display the coordinates under the cursor.  Supports decimal degrees and DMS.

### Installation


```
npm install --save react-leaflet-coordinate
yarn install
```

### Usage

Simply import the `CoordinateControl` and place as a child of the `Map` component.

```javascript
import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

import { CoordinatesControl } from 'react-leaflet-box-zoom'

export default class App extends Component {

render () {
  return (
      <div className="map">
        <Map
          center={[44.635, 22.653]}
          zoom={12}
          zoomControl={false} >

          <TileLayer
            attribution="Google Maps"
            url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"/>

          <CoordinatesControl />
        </Map>
      </div>
    )
  }
}
```

### Props

Name | Default | Description
--- | --- | ---
position | `bottomleft` | Position of the control.  Valid values are `topleft`, `topright`, `bottomleft`, or `bottomright`
style | `null` | A react css style prop for the button.
coordinates | `decimal` | Coordinate system to use.  Valid values are `decimal` (decimal lat/lng) or `degrees` (degrees, minutes, seconds)


### Development

This was created with `create-react-library`.  To develop locally run the library in the root directory.

```
yarn install
yarn start
```

Then in a seperate console tab run the example app

```
cd example
yarn install
yarn start
```

### License

MIT © [ChrisLowe-Takor](https://github.com/ChrisLowe-Takor)
