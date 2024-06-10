
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [72.9101, 19.0786], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker()
    .setLngLat(listing.geometry.coordinates)
    .addTo(map);