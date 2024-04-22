
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


export const menu=[
    { id: 1, navigateTo:"details", indicator:'HOME_MENU', type: 'community', icon: "car-key", name: "Road Signs" },
    { id: 2, navigateTo:"details", indicator:'HOME_MENU', type: 'community', icon: "book", name: "Basic Theory" },
    { id: 3, navigateTo:"icons", indicator:'HOME_MENU', type: 'community', icon: "white-balance-sunny", name: "Road Markings" },
    { id: 4, navigateTo:"icons", indicator:'HOME_MENU', type: 'community', icon: "traffic-light", name: "Traffic Signals" },
    { id: 5, navigateTo:"quiz", indicator:'HOME_MENU', type: 'community', icon: "gavel", name: "Exercises" },
    { id: 6, navigateTo:"settings", indicator:'HOME_MENU', type: 'ionic', icon: "settings-sharp", name: "Settings" },
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
    { id: 53, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/beginningofdualcarriageroad.png"), name: "Road widens ahead" },
    { id: 54, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/bendleft.png"), name: "Bend left" },
    { id: 55, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/bendright.png"), name: "Bend right" },
    { id: 56, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/carriagewaynarrowsbothsides.png"), name: "Carriage way narrows both" },
    { id: 57, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/cattlecrossingahead.png"), name: "Cattle crossing ahead" },
    { id: 58, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/childrencrossing.png"), name: "Children crossing" },
    { id: 59, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/crossingwind.png"), name: "Crossing wind" },
    { id: 60, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/cyclist.png"), name: "Cyclist" },
    { id: 61, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/dangeroffallingrocksahead.png"), name: "Danger of falling rocks" },
    { id: 62, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/electriccablesahead.png"), name: "Electric cable" },
    { id: 63, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/endofdualcarriageroad.png"), name: "End of dual carriage road" },
    { id: 64, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/ferryahead.png"), name: "Ferry ahead" },
    { id: 65, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/give_way.png"), name: "Give way" },
    { id: 66, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/hazardahead.png"), name: "Hazard ahead" },
    { id: 67, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/humbbridgeahead.png"), name: "Hump bridge ahead" },
    { id: 68, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/junctionahead.png"), name: "Junction ahead stop" },
    { id: 69, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/junctionaheadofaccelerationlanewithroadfromtherigh.png"), name: "Junction ahead of acceleration" },
    { id: 70, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/loosesurfaceroads.png"), name: "Loose surface road" },
    { id: 71, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/lowflyingaircraftcrossingahead.png"), name: "Lower flying aircraft" },
    // { id: 72, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/men_at_work.png"), name: "Road work ahead" },
    { id: 73, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/minorroadfromleft.png"), name: "Minor road road left" },
    { id: 74, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/minorroadfromright.png"), name: "Minor road right" },
    { id: 75, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/narrowbridgeahead.png"), name: "Narrow bridge ahead" },
    { id: 76, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/pedestrianscrossing.png"), name: "Pedestrians crossing" },
    { id: 77, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/railwaycrossingwithbarriers.png"), name: "Railway crossing with barrier" },
    { id: 78, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/railwaycrossingwithoutbarriers.png"), name: "Railway crossing without barrier" },
    { id: 79, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/riverbank.png"), name: "River bank" },
    { id: 80, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/riverbendcrossingahead.png"), name: "River bend crossing" },
    { id: 81, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadjunctionahead.png"), name: "Road junction ahead" },
    { id: 82, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadnarrowsfromleft.png"), name: "Narrow road left" },
    { id: 83, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadnarrowsfromright.png"), name: "Narrow road right" },
    { id: 84, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadwidensahead.png"), name: "Road widens ahead" },
    { id: 85, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadworksahead.png"), name: "Road works ahead" },
    { id: 86, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roundaboutahead.png"), name: "Round about" },
    { id: 87, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/severebumpahead.png"), name: "Severe hump ahead" },
    { id: 88, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/severedipahead.png"), name: "Severe dipa ahead" },
    { id: 89, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/slipperyroad.png"), name: "Slippery road" },
    { id: 90, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/steepascentahead.png"), name: "Steep ascent head" },
    { id: 91, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/steepdecentahead.png"), name: "Steep descent head" },
    { id: 92, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/stop.png"), name: "Stop" },
    { id: 93, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/successivebendtotheleft.png"), name: "Successive bend left" },
    { id: 94, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/successivebendtotheright.png"), name: "Successive bend right" },
    { id: 95, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/t-junctionahead.png"), name: "T-junction ahead" },
    { id: 96, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/trafficjam.png"), name: "Traffic jam" },
    { id: 97, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/trafficlightsignalahead.png"), name: "Traffic lights ahead" },
    { id: 98, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/twowaytrafficahead.png"), name: "Two way trafic head" },
    { id: 99, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/unevenroadsurfaceahead.png"), name: "Uneven road surface ahead" },
    { id: 100, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/wildaninalscrossing.png"), name: "Game park ahead" },
    { id: 101, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/yintersectionahead.png"), name: "Y-intersection ahead" },
];





