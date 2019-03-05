# react-leaflet-box-zoom

> A Box zoom tool for React Leaflet

[![NPM](https://img.shields.io/npm/v/rreact-leaflet-box-zoom.svg)](https://www.npmjs.com/package/react-leaflet-box-zoom) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### About

A box zoom tool for React Leaflet.

![](https://i.imgur.com/hTRmOuV.gif)

### Installation


```
npm install --save react-leaflet-box-zoom

yarn install
```

### Usage

```javascript
import React, { Component } from 'react'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'

import { BoxZoomControl } from 'react-leaflet-box-zoom'

export default class App extends Component {

  render () {

    return (
      <div className="map">
        <Map
          center={[44.635, 22.653]}
          zoom={12}
          zoomControl={false} >

          <TileLayer
            attribution=""
            url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"/>
			
          <ZoomControl position="topright" />

          <BoxZoomControl 
            position="topright"
            sticky={true}
          />

        </Map>
      </div>
    )
  }
}
```

### Ref control

You can programatically start and stop the box zoom tool by using a ref
```javascript
<BoxZoomControl ref={(ref) => this.boxZoomControlRef = ref} />

// elsewhere
this.boxZoomControlRef.stop();
this.boxZoomControlRef.start();
```


### Props

Name | Default | Description
--- | --- | ---
sticky | `false` | Setting to `true` will cause the zoom control to remain active after the user has zoomed
position | `topleft` | Position of the control.  Valid values are `topleft`, `topright`, `bottomleft`, or `bottomright`
style | | A react css style prop for the button.  You can pass in your own style such as a custom background image. The default is set to match the default Leaflet style with a box zoom icon
activeStyle | | A react css style prop for the active state of the button. This appends to the `style` prop.





### License

MIT © [ChrisLowe-Takor](https://github.com/ChrisLowe-Takor)
