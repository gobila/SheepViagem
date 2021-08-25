import { imageConfigDefault } from "next/dist/server/image-config";

export function propToStyle(propName){
    return function (prop){
        const propValue = prop[propName];

        if(typeof propValue === 'string' || typeof propValue ==='number'){
            return{
                [propName]:propValue
            }
        }
    }
}