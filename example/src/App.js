import { string } from 'prop-types'
import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

import { CoordinatesControl } from 'react-leaflet-box-zoom'

export default class App extends Component {
	constructor(props) {
	super(props);
		this.state = {
		coord: "decimal"
		};
	}
	handleChange(props) {
		this.setState({'coord': props})
	}
	render () {

		return (
			<div>
				<div className="map">
					<button style={{marginLeft: "10px"}} onClick={() => this.handleChange("decimal")}>Decimal</button>
					<button onClick={() => this.handleChange("degrees")}>Degrees</button>
					<button onClick={() => this.handleChange("mgrs")}>MGRS</button>
					
					<Map
						center={[44.635, 22.653]}
						zoom={12}
						zoomControl={false} >
					
						

						<TileLayer
							attribution=""
							url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"/>

				
						<CoordinatesControl 
							coordinates={this.state.coord}
							position="topleft"
						/>

					</Map>
				</div>
			</div>
			
		)
	}
}
