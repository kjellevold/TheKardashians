
const foto = document.querySelector("#foto");
const nav = document.querySelector("#nav");
let harKlikket = false;

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWxsYWsiLCJhIjoiY2s1M2x1c2hvMGEwZDNvbXB2c3k4NGhuZCJ9.s7vgJP8G0F_DdDwUXtiRsQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kamillak/ck5l43fgl20gb1ipmnm6ok0mp',
    zoom: 10,
    duration: 10000,
    center: [-118.526034, 34.128254]
});

const lokasjoner = {
    'type': 'FeatureCollection',
    "features" : [
        {
            'type': 'Feature',
            'properties': {"navn" : "Caitlyn Jenner"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.893359,
                    34.058533
                    ]
                }  
        }, {
            'type': 'Feature',
            'properties': {"navn" : "Kris Jenner"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.666602,
                    34.169160
                    ]
                }  
        },
        {
            'type': 'Feature',
            'properties': {"navn" : "Kourtney Kardashian"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.676802,
                    34.128243
                    ]
                }  
        },
        {
            'type': 'Feature',
            'properties': {"navn" : "Kim Kardashian"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.667679,
                    34.170185
                    ]
                }  
        },
        {
            'type': 'Feature',
            'properties': {"navn" : "Khloe Kardashian"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.671447,
                    34.128499
                    ]
                }  
        },
        {
            'type': 'Feature',
            'properties': {"navn" : "Rob Kardashian"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.679295,
                    34.138017
                    ]
                }  
        },
        {
            'type': 'Feature',
            'properties': {"navn" : "Kendall Jenner"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.437389,
                    34.137973
                    ]
                }  
        },
        {
            'type': 'Feature',
            'properties': {"navn" : "Kylie Jenner"},
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -118.652584,
                    34.159773
                    ]
                }  
        }
]};

map.on('load', function() {
    map.loadImage(
        './img/marker.png',
        function(error, image) {
            if (error) throw error;
            map.addImage('marker', image);
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': {
                    'type': 'geojson',
                    'data': lokasjoner
                },
                    'layout': {
                        'icon-image': 'marker',
                        'icon-size': 0.15,
                        'icon-allow-overlap': true
                        }
                    });
        }
    );
});

map.on('click', 'points', function(e) {
    harKlikket = true;
    const navn = e.features[0].properties.navn;
    const element = document.querySelector(`article[data-name="${navn}"]`);

    oppdaterFirkant(element);
})

const oppdaterFirkant = (element) => {
    const bilde = element.dataset.bilde;
    const name = element.dataset.name;
    const home = element.dataset.home;
    const price = element.dataset.price;
    const info = element.dataset.info;
    foto.querySelector("img").src = bilde;
    foto.querySelector("h1").innerHTML = name;
    foto.querySelector("h2").innerHTML = home;
    foto.querySelector("h3").innerHTML = price;
    foto.querySelector("p").innerHTML = info;

    const lng = Number(element.dataset.lng);
    const lat = Number(element.dataset.lat);
    
    const point = [lng, lat];
    
    map.easeTo({
        center: point,
        zoom: 18,
        duration: 4000
    });
    map.fire('flystart');
}

nav.onclick = (evt) => {
    harKlikket = true;
    if(evt.target.id === "nav") return;
    oppdaterFirkant(evt.target);
}

map.on("moveend", () => {
    map.fire("flyend");
})

map.on('flystart', function(){
    foto.style.display = "none";
});
map.on('flyend', function(){
    if(harKlikket)
    foto.style.display = "block";
});
