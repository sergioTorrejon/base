import { appConfig } from "src/config";

const path = require('path');

export const joinPathFolder = ( pathRoot : string, folder:string ) => {
    return  path.join(pathRoot, folder, path.sep)
}

export const pathStorageLogs = ( file : string ='' ) => {
    const archivo= path.join(appConfig.PATH_ROOT,'logs',file, path.sep)
    return archivo
}