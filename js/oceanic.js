STYLE.oceanic = JSON.parse(JSON.stringify(STYLE.common.concat(
    {
        "featureType": "land", // 陆地
        "elementType": "geometry",
        "stylers": {
            "color": "#1B2B34ff"
        }
    },
    {
        "featureType": "water", // 水域
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#5FB3B3ff"
        }
    },
    {
        "featureType": "scenicspots", // 景点
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#EC5f67ff"
        }
    },
    {
        "featureType": "green", // 绿地
        "elementType": "geometry",
        "stylers": {
            "color": "#99C794ff"
        }
    },
    {
        "featureType": "medical", // 医院
        "elementType": "geometry",
        "stylers": {
            "color": "#6699CCff"
        }
    },
    {
        "featureType": "education", // 高校
        "elementType": "geometry",
        "stylers": {
            "color": "#F99157ff"
        }
    },
    {
        "featureType": "manmade", // 人造区域
        "elementType": "geometry",
        "stylers": {
            "color": "#343D46ff"
        }
    },


    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
    {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
    {
        "featureType": "provincialway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
    {
        "featureType": "cityhighway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
    {
        "featureType": "tertiaryway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
    {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#4F5B66ff"
        }
    },
)))