import {
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID,
} from "@env"

console.log('APIKEY ',APIKEY)

const firebaseConfig = {
    apiKey:APIKEY,
    authDomain:AUTHDOMAIN,
    projectId:PROJECTID,
    storageBucket:STORAGEBUCKET,
    messagingSenderId:MESSAGINGSENDERID,
    appId:APPID,
    measurementId:MEASUREMENTID,
}

export default firebaseConfig;