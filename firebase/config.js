import {
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID,
} from "@env"


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