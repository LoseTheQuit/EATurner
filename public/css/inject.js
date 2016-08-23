import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "color": "#fff",
        "fontFamily": "'Roboto', sans-serif",
        "background": "linear-gradient(to bottom, #1e5799 0%, #27a2f4 21%, #2085c9 48%, #21b8d3 77%, #017bbc 100%)",
        "filter": "progid: DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#017bbc', GradientType=0)",
        "height": "auto"
    },
    "bodyOverlay": {
        "width": "100%",
        "height": "auto",
        "position": "sticky",
        "WebkitAnimation": "fgMove 500s infinite",
        "animation": "fgMove 500s infinite",
        "background": "url('../img/customJumbotronoverlay.svg')",
        "backgroundSize": "cover",
        "minHeight": 3000
    },
    "h2": {
        "fontWeight": "300",
        "fontSize": 67
    },
    "robotoh1": {
        "fontWeight": "300",
        "fontSize": 67
    },
    "robotoh2": {
        "fontWeight": "300",
        "fontSize": 37,
        "paddingBottom": 30
    },
    "robotoh3": {
        "fontWeight": "300",
        "fontSize": 33,
        "marginTop": 200
    },
    "robotoHeader": {
        "fontWeight": "700",
        "fontSize": "25x"
    },
    "cardStyle": {
        "paddingTop": "3%",
        "paddingRight": "3%",
        "paddingBottom": "3%",
        "paddingLeft": "3%",
        "color": "#fff",
        "wordWrap": "break-word"
    },
    "cardOverlay1": {
        "background": "rgba(0, 107, 148, .75)"
    },
    "cardOverlay2": {
        "background": "rgba(0, 126, 173, .75)"
    },
    "cardOverlay3": {
        "background": "rgba(0, 144, 199, .75)"
    },
    "cardOverlay4": {
        "background": "rgba(0, 163, 224, .75)"
    },
    "cardOverlay5": {
        "background": "rgba(0, 182, 250, .75)"
    },
    "cardOverlay6": {
        "background": "rgba(20, 191, 255, .75)"
    },
    "cardOverlay7": {
        "background": "rgba(46, 198, 255, .75)"
    },
    "card": {
        "background": "rgba(0, 107, 148, .180)",
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "borderRadius": 0,
        "color": "#fff"
    },
    "stickySideBar": {
        "position": "sticky"
    },
    "sticky": {
        "top": 0,
        "position": "fixed"
    },
    "affix": {
        "top": 20,
        "position": "fixed"
    },
    "theDividingLine": {
        "display": "block",
        "height": 3,
        "width": "90%",
        "background": "#fff"
    },
    "cardOverRide": {
        "paddingTop": "3%",
        "paddingRight": "3%",
        "paddingBottom": "3%",
        "paddingLeft": "3%",
        "background": "rgba(0, 0, 0, .005)"
    }
});