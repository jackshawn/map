STYLE.tokyoNight = JSON.parse(JSON.stringify(STYLE.common.concat(
    {
        "featureType": "land", // 陆地
        "elementType": "geometry",
        "stylers": {
            "color": "#15151eff"
        }
    },
    {
        "featureType": "water", // 水域
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#08c294ff"
        }
    },
    {
        "featureType": "scenicspots", // 景点
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#79a1f7ff"
        }
    },
    {
        "featureType": "green", // 绿地
        "elementType": "geometry",
        "stylers": {
            "color": "#ba9af7ff"
        }
    },
    {
        "featureType": "medical", // 医院
        "elementType": "geometry",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "education", // 高校
        "elementType": "geometry",
        "stylers": {
            "color": "#ff9e63ff"
        }
    },
    {
        "featureType": "manmade", // 人造区域
        "elementType": "geometry",
        "stylers": {
            "color": "#c0c9f5ff"
        }
    },


    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "provincialway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "cityhighway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "tertiaryway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
    {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f7768eff"
        }
    },
)))