
const introData = [
    {
        id:1,
        title:"Road Signs & Symbols",
        description:"They help ensure all road users are safe from potential driving hazards",
        img:require("./assets/introduction_signs/road_signs.jpg")   ,
    },
    {
        id:2,
        title:"Road Safety Precautions",
        description:"Means, methods and measures aimed at reducing the likelihood road accidents",
        img:require("./assets/introduction_signs/road_rules.jpg"),
    },
    {
        id:2,
        title:"Practice Quizzes & Test",
        description:"Now get your order delivered at your door steps",
        img:require("./assets/introduction_signs/exam.jpeg"),
    }
]

export default introData;

export const getStarted = [
    {
        id:1,
        title:"Road Signs & Symbols",
        description:"Learn more about",
        details:[
            {
                id:1,
                detailsTitle:"a) Warning Signs",
                iconsDescription:[
                    {
                        img:require("./assets/introduction_signs/road_signs/bendleft.png"),
                        text:"Bend Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/roadnarrowsfromleft.png"),
                        text:"Road Narrows from Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/slipperyroad.png"),
                        text:"Slippery Roads"
                    }
                ]
            },
            {
                id:2,
                detailsTitle:"b) Manadatory Road Signs",
                iconsDescription:[
                    {
                        img:require("./assets/introduction_signs/road_signs/noturnright.png"),
                        text:"Bend Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/noentryforpedestrians.png"),
                        text:"Road Narrows from Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/roadclosed.png"),
                        text:"Slippery Roads"
                    }
                ]
            },
            {
                id:3,
                detailsTitle:"c) Information Road Signs",
                iconsDescription:[
                    {
                        img:require("./assets/introduction_signs/road_signs/hospital.png"),
                        text:"Bend Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/hotel.png"),
                        text:"Road Narrows from Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/fillingstation.png"),
                        text:"Slippery Roads"
                    }
                ]
            }
        ],
    }
]

export const learnMoreData =[
    {
        id:1,
        img:require("./assets/basic.png")

    }
]

export const menu=[
    { id: 1, component:"Home", param:"ROAD_SIGNS", navigateTo:"details", indicator:'HOME_MENU', type: 'community', icon: "car-key", name: "Road Signs" },
    { id: 2, component:"Home", param:"BASIC_THEORY", navigateTo:"details", indicator:'HOME_MENU', type: 'community', icon: "book", name: "Basic Theory" },
    { id: 3, component:"Home", param:"ROAD_MARKINGS", navigateTo:"icons", indicator:'HOME_MENU', type: 'community', icon: "white-balance-sunny", name: "Road Markings" },
    { id: 4, component:"Home", param:"TRAFFIC_SIGNALS", navigateTo:"icons", indicator:'HOME_MENU', type: 'community', icon: "traffic-light", name: "Traffic Signals" },
    { id: 5, component:"Home", param:"EXERCISES", navigateTo:"quiz", indicator:'HOME_MENU', type: 'community', icon: "gavel", name: "Exercises" },
    { id: 6, component:"Home", param:"SETTINGS", navigateTo:"settings", indicator:'HOME_MENU', type: 'ionic', icon: "settings-sharp", name: "Settings" },
    { id: 7, component:"IconsPage", param:"MANDATORY_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Mandatory Signs" },
    { id: 8, component:"IconsPage", param:"WARNING_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Warning Signs" },
    { id: 9, component:"IconsPage", param:"INFORMATION_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Information Signs" },
    { id: 10, component:"IconsPage", param:"ROADWORKS_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 11, component:"IconsPage", param:"TRANSERVE_MARKING", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Transerve Markings" },
    { id: 12, component:"IconsPage", param:"OTHER_ROAD_MARKINGS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Other Road Markings" },

    { id: 12, component:"ItemList", param:"INTRODUCTION_TO_DRIVING", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Introduction to driving" },
    { id: 12, component:"ItemList", param:"BASIC_MECHANICS", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic Mechanics" },
    { id: 12, component:"ItemList", param:"DEFENSIVE_DRIVING", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Defensive Driving" },
    { id: 12, component:"ItemList", param:"ROADWORK_SIGNS", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 12, component:"ItemList", param:"BASIC_FIRST_AID", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic first aid" },
]

export const  iconImg=[
    { id: 1, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsarycycletrack.png"), name: "Compulsory cycle track" },
    { id: 2, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsarypedestrianfootpath.png"), name: "Compulsory pedestrian footpath" },
    { id: 3, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsoryminimumspeed.png"), name: "Compulsory minimum speed" },
    { id: 4, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsoryparkingforthedisabled.png"), name: "Compulsory parking for disabled" },
    { id: 5, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsorytrackforcattle.png"), name: "Compulsory track for cattle" },
    { id: 6, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/directiontobefollowed.png"), name: "Direction to be followed" },
    { id: 7, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/dontdrinkanddrive.png"), name: "Don't drink and drive" },
    { id: 8, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/dontparkonpavements.png"), name: "Don't park on pavement" },
    { id: 9, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/donttextanddrive.png"), name: "Don't text and drive" },
    { id: 10, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/drivingvehicleslessthandistanceshownisprohibited.png"), name: "Driving vehicle less than " },
    { id: 11, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofcompulsoryminimumspeed.png"), name: "End of compulsory minimum speed" },
    { id: 12, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofprohibitions.png"), name: "End of prohibitions" },
    { id: 13, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofspeedlimit.png"), name: "End of speed limit" },
    { id: 14, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbbidenformotorcycles.png"), name: "Entry forbidden to motorcycle" },
    { id: 15, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 16, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbiddentoallbicycles.png"), name: "Entry forbbiden for bicycle" },
    { id: 17, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/givepriorityforoncomingvehicles.png"), name: "Priority for on-coming traffic" },
    { id: 18, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/giveway.png"), name: "Give way" },
    { id: 19, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/goaheadonly.png"), name: "Go ahead only" },
    { id: 20, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/keepleft.png"), name: "keep left" },
    { id: 21, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforallvehicles.png"), name: "No entry for all vehicles" },
    { id: 22, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "No entry for animal driven" },
    { id: 23, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforbuses.png"), name: "No entry for buses" },
    { id: 24, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforcommercialvehicles.png"), name: "No entry for commercial" },
    { id: 25, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforfarmvehicles.png"), name: "No entry for farm vehicles" },
    { id: 26, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforhandcarts.png"), name: "No entry for hand carts" },
    { id: 27, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforpedestrians.png"), name: "No entry for pedestrians" },
    { id: 28, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforpowerdrivenvehicles.png"), name: "No entry for power driven vehicles" },
    { id: 29, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedinglengthshown.png"), name: "No entry for vehicles exceeding the length" },
    { id: 30, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 31, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthisheight.png"), name: "No entry for vehicles exceeding the height" },
    { id: 32, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 33, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthisweight.png"), name: "No entry for vehicles exceeding the weight" },
    { id: 34, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthiswidth.png"), name: "No entry for vehicles exceeding the width" },
    { id: 35, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingweightshownononecode.png"), name: "No entry for vehicles exceeding the weight" },
    { id: 36, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noovertakingofgoodsvehicles.png"), name: "No overtaking goods vehicles" },
    { id: 37, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noparking.png"), name: "No parking" },
    { id: 38, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/nostoppingforanyreason.png"), name: "No stopping for any reasons" },
    { id: 39, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noturnleft.png"), name: "No left turn" },
    { id: 40, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noturnright.png"), name: "No right turn" },
    { id: 41, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/no_uturn.png"), name: "No U turn" },
    { id: 42, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/overtakingofvehiclesisprohibited.png"), name: "Overtaking is prohibited" },
    { id: 43, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/passeitherside.png"), name: "Pass ether sides" },
    { id: 44, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/roadclosed.png"), name: "Road closed" },
    { id: 45, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/roundabout.png"), name: "Round About" },
    { id: 46, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/soundingofhornsirensprohibited.png"), name: "No sounding of horn sirens" },
    { id: 47, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/speedlimit.png"), name: "Speed limit" },
    { id: 48, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/stopatcontrolpost.png"), name: "Stop at control post" },
    { id: 49, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/stopchildrencrossing.png"), name: "Stop children crossing" },
    { id: 50, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/turnleftahead.png"), name: "Turn left ahead" },
    { id: 51, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/turnrightahead.png"), name: "Turn right ahead" },
    { id: 52, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/vehiclestravelstrightorturnright.png"), name: "Vehicle travel straight or turn" },
];


