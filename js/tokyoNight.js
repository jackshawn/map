STYLE.tokyoNight = JSON.parse(JSON.stringify(STYLE.common.concat(
    {
        "featureType": "land", // 陆地
        "elementType": "geometry",
        "stylers": {
            "color": "#16161eff"
        }
    },
    {
        "featureType": "water", // 水域
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#b73b95ff"
        }
    },
    {
        "featureType": "scenicspots", // 景点
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#0db3d0ff"
        }
    },
    {
        "featureType": "green", // 绿地
        "elementType": "geometry",
        "stylers": {
            "color": "#9dcc69ff"
        }
    },
    {
        "featureType": "medical", // 医院
        "elementType": "geometry",
        "stylers": {
            "color": "#e87087ff"
        }
    },
    {
        "featureType": "education", // 高校
        "elementType": "geometry",
        "stylers": {
            "color": "#79a1f6ff"
        }
    },
    {
        "featureType": "manmade", // 人造区域
        "elementType": "geometry",
        "stylers": {
            "color": "#ba99f6ff"
        }
    },


    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#79a1f6ff"
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
            "color": "#f99a62ff"
        }
    },
    {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#f99a62ff"
        }
    },
)))