import React from 'react';
import { 
    WiNightClear, 
    WiNightCloudy,
    WiNightAltPartlyCloudy,
    WiNightCloudyHigh,
    WiNightAltSnow,
    WiNightAltShowers,
    WiNightAltSprinkle,
    WiNightAltRain,
    WiNightAltHail,
    WiNightSnowWind,
    WiNightSnowThunderstorm,
    WiNightAltRainWind,
    WiNightAltThunderstorm,
    WiNightAltStormShowers,
    WiNightAltSleetStorm,
    WiNightAltRainMix,
    WiNightRainWind,
    WiDayRainMix,
    WiDaySleetStorm,
    WiDayRainWind,
    WiDaySnowThunderstorm,
    WiDaySnowWind,
    WiDayHail,
    WiDayRain,
    WiDaySprinkle,
    WiDayShowers,
    WiDaySunny,
    WiDaySunnyOvercast,
    WiDayCloudy,
    WiDayCloudyHigh,
    WiDaySnow,
    WiDayThunderstorm,
    WiDayStormShowers,
    WiCloudDown,
    WiSprinkle,
    WiRaindrops,
    WiRain,
    WiRainMix,
    WiStormShowers
} from 'weather-icons-react';

const weatherConditions = [
    { id: 2, nightIcon: <WiNightClear style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySunny style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 3, nightIcon: <WiNightCloudy style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySunnyOvercast style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 5, nightIcon: <WiNightAltPartlyCloudy style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayCloudy style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 7, nightIcon: <WiNightAltPartlyCloudy style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayCloudy style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 9, nightIcon: <WiNightCloudyHigh style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayCloudyHigh style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 10, nightIcon: <WiNightCloudyHigh style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayCloudyHigh style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 20, nightIcon: <WiCloudDown style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiCloudDown style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 23, nightIcon: <WiNightAltSnow style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySnow style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 24, nightIcon: <WiNightAltSnow style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySnow style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 27, nightIcon: <WiSprinkle style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiSprinkle style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 28, nightIcon: <WiSprinkle style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiSprinkle style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 60, nightIcon: <WiNightAltShowers style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayShowers style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 61, nightIcon: <WiNightAltSprinkle style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySprinkle style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 63, nightIcon: <WiNightAltRain style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRain style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 65, nightIcon: <WiRaindrops style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiRaindrops style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 66, nightIcon: <WiNightAltHail style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayHail style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 67, nightIcon: <WiRain style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiRain style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 68, nightIcon: <WiRainMix style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiRainMix style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 71, nightIcon: <WiNightAltSnow style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySnow style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 73, nightIcon: <WiNightSnowWind style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySnowWind style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 75, nightIcon: <WiNightSnowThunderstorm style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySnowThunderstorm style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 80, nightIcon: <WiNightAltRainWind style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRainWind style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 81, nightIcon: <WiNightAltRainWind style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRainWind style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 82, nightIcon: <WiNightRainWind style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRainWind style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 83, nightIcon: <WiNightRainWind style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRainWind style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 84, nightIcon: <WiNightAltRainMix style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRainMix style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 85, nightIcon: <WiNightAltRainMix style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRainMix style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 86, nightIcon: <WiNightAltRain style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRain style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 87, nightIcon: <WiNightAltRain style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayRain style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 90, nightIcon: <WiStormShowers style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiStormShowers style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 91, nightIcon: <WiStormShowers style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiStormShowers style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 92, nightIcon: <WiNightAltSleetStorm style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySleetStorm style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 93, nightIcon: <WiNightAltSleetStorm style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDaySleetStorm style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 94, nightIcon: <WiNightAltStormShowers style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayStormShowers style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 95, nightIcon: <WiNightAltStormShowers style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayStormShowers style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 96, nightIcon: <WiNightAltThunderstorm style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayThunderstorm style={{ float: 'left' }} size={48} color='#000' /> },
    { id: 97, nightIcon: <WiNightAltThunderstorm style={{ float: 'left' }} size={48} color='#000' />, dayIcon: <WiDayThunderstorm style={{ float: 'left' }} size={48} color='#000' /> },
];

const getNightIcon = (phenoNightId) => {
    return weatherConditions.filter(weatherCondition => weatherCondition.id == phenoNightId).map(fCond => (
        fCond.nightIcon
    ));
};

const getDayIcon = (phenoDayId) => {
    return weatherConditions.filter(weatherCondition => weatherCondition.id == phenoDayId).map(fCond => (
        fCond.dayIcon
    ));
}

export default {
    getNightIcon,
    getDayIcon
};