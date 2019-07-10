import L from 'leaflet';
import PropTypes from 'prop-types';
import './styles.css';
import {
	withLeaflet, 
	MapControl
} from 'react-leaflet';

const reactToCSS = require('react-style-object-to-css')

const coordinatesControlDefaultStyle = {
	width: '290px', 
	margin: '0',
	border: '1px solid rgba(0,0,0,0.2)',
	borderRadius: '4px',
	backgroundColor: 'rgba(255, 255, 255, 0.7)',
	outline: 'none',
	fontSize: '11px',
	boxShadow: 'none',
	color: '#333',
	padding: '2px 2px',
	minHeight: '18px'
}

L.Control.CoordinateControl = L.Control.extend({
	_style: null,
	_coordinateButton: null,
	_coordinates: 'decimal',
	initialize: function(element) {
		this.options.position = element.position;
		
		this._coordinates = element.coordinates || 'decimal';

		if (element.style === undefined) {
			this._style = reactToCSS(coordinatesControlDefaultStyle);
		} else {
			this._style = reactToCSS(element.style);
		}
	},
	onAdd: function(map) {
		var coordinateButton = L.DomUtil.create('button');
		coordinateButton.setAttribute('style',this._style);
		coordinateButton.setAttribute('id', 'coorindate-control');

		map.on('mousemove', (e) => {
			if (this._coordinates === 'degrees') {
				coordinateButton.innerHTML = "<strong>Latitude: </strong>" +  this.convertDecimalLatToDegrees(e.latlng.lat) + " <strong>Longitude: </strong> " + this.convertDecimalLngToDegrees(e.latlng.lng);
			} else {
				var lat = e.latlng.lat.toLocaleString('en-US', {minimumFractionDigits: 8, useGrouping:false});
				var lng = e.latlng.lng.toLocaleString('en-US', {minimumFractionDigits: 8, useGrouping:false});
				coordinateButton.innerHTML = "<strong>Latitude: </strong>" +lat + "&nbsp; <strong>Longitude: </strong>" + lng;
			}
		});

		this._coordinateButton = coordinateButton;
		return coordinateButton;
	},
	convertDecimalLatToDegrees: function(lat) {
		var dms = this.convertDDToDMS(lat, false);
		var dmsDeg = dms.deg.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		var dmsMin = dms.min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		var dmsSec = dms.sec.toLocaleString('en-US', {minimumIntegerDigits: 2, minimumFractionDigits: 2, useGrouping:false});
		var dmsString = dmsDeg + 'º ' + dmsMin + '′ ' + dmsSec + '′′ ' + dms.dir; 
		return dmsString;
	},
	convertDecimalLngToDegrees: function(lng) {
		var dms = this.convertDDToDMS(lng, true)
		var dmsDeg = dms.deg.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		var dmsMin = dms.min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		var dmsSec = dms.sec.toLocaleString('en-US', {minimumIntegerDigits: 2, minimumFractionDigits: 2, useGrouping:false});
		var dmsString = dmsDeg + 'º ' + dmsMin + '′ ' + dmsSec + '′′ ' + dms.dir; 
		return dmsString;
	},
	convertDDToDMS: function(D, lng) {
		return {
			dir : D<0?lng?'W':'S':lng?'E':'N',
			deg : 0|(D<0?D=-D:D),
			min : 0|D%1*60,
			sec :(0|D*60%1*6000)/100
		};
	}
});

L.control.coordinateControl = (opts) => {
    return new L.Control.CoordinateControl({...opts});
}

class CoordinatesControl extends MapControl {

	control;

	constructor(props) {
		super(props);
	}

	createLeafletElement(props) {
		this.control = L.control.coordinateControl({...props});
		return this.control;
	}
}

export default withLeaflet(CoordinatesControl);

CoordinatesControl.propTypes = {
	style: PropTypes.element,
	coordinates: PropTypes.oneOf(['decimal', 'degrees']),
	position: PropTypes.oneOf(['topright', 'topleft', 'bottomright', 'bottomleft'])
}