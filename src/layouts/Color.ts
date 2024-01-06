type RGBColor = {red: number, green: number, blue: number};

const toColorString = (color: RGBColor): string => {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
};
const enlighten = (color: RGBColor, percent: number): RGBColor => {
    return {
        red: Math.floor(color.red * (1 + percent)),
        green: Math.floor(color.green * (1 + percent)),
        blue: Math.floor(color.blue * (1 + percent))
    }  
};

const RGBTan: RGBColor = {red: 210, green: 180, blue: 140};
const DarkRGBTan: RGBColor = enlighten(RGBTan, -0.4);
const TextTan: RGBColor = enlighten(RGBTan, -0.6);
const WhiteTextTan: RGBColor = enlighten(RGBTan, 0.2);
const nearBlackTan: RGBColor = enlighten(RGBTan, -0.8);


export const backgroundColor: string = toColorString(RGBTan);
export const accentColor: string = toColorString(DarkRGBTan);
export const textColor: string = toColorString(TextTan);
export const WhiteTextColor: string = toColorString(WhiteTextTan);
export const nearBlackColor: string = toColorString(nearBlackTan);
export const nearBlackColorAlpha: string = `rgba(${nearBlackTan.red}, ${nearBlackTan.green}, ${nearBlackTan.blue}, 0.6)`;
