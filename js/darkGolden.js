STYLE.darkGolden = JSON.parse(JSON.stringify(STYLE.common.concat(
    {
        "featureType": "land", // 陆地
        "elementType": "geometry",
        "stylers": {
            "color": "#242422ff"
        }
    },
    {
        "featureType": "water", // 水域
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "scenicspots", // 景点
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "green", // 绿地
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "medical", // 医院
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "education", // 高校
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "manmade", // 人造区域
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#c2934bff"
        }
    },


    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "provincialway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "cityhighway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "tertiaryway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
    {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#c2934bff"
        }
    },
)))