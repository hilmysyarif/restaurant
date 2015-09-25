var GoogleMap = React.createClass({
	getInitialState: function() {
		return {
			latitude: -36.784190,
			longitude: 174.775396,
			zoom: 15,
			contentString: '<div class="marker-label-title">' +
								'Takapuna Beach Cafe & Store' +
							'</div>' + 
							'22 The Promenade, <br />' +
							'Takapuna, <br />' +
							'Auckland, 0622, <br />' +
							'New Zealand',
			markerTitle: 'Takapuna Beach Cafe & Store',
			styles: [{
				elementType: "geometry", 
				stylers: [
					{
						saturation: -100
					}
				]
			}]
		};
	},
	componentDidMount: function() {
		if(!window.google){
			window.initMap = this.initMap;
			var script = document.createElement('script');
			var src = 'https://maps.googleapis.com/maps/api/js';
			src += '?callback=initMap';
			script.setAttribute('src', src);
			document.head.appendChild(script);
		} else {
			setTimeout(this.initMap)
		}
	},
	initMap: function() {
		var latitude = this.state.latitude;
		var longitude = this.state.longitude;
		var contentString = this.state.contentString;
		var styles = this.state.styles;
		var mapType = new google.maps.StyledMapType(styles, {name: "Grayscale"});

		var mapOptions = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: this.state.zoom,
			draggable: false,
			disableDefaultUI: true
		};

		var myLatlng = new google.maps.LatLng(latitude, longitude);
	    var mapCanvas = document.getElementById('map-canvas');
	    var map = new google.maps.Map(mapCanvas, mapOptions);
	    map.mapTypes.set('grey', mapType);
	    map.setMapTypeId('grey');

	    var infowindow = new google.maps.InfoWindow( {
        	content: contentString,
        	maxWidth: 300
        });

	    var marker = new google.maps.Marker( {
        	position: myLatlng,
        	map: map,
        	title: this.state.markerTitle
        });

	    //Use mousedown instead of click for touch events as well as click
		google.maps.event.addListener(marker, 'mousedown', function () {
	      infowindow.open(map,marker);
	    });

	    infowindow.open(map,marker);
	},
	render: function() {
		return (
			<div className='location'>
				<div id="map-canvas"></div>
			</div>
		)
	}
});