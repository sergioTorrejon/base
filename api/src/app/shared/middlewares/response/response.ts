import { ResDto, UserDto } from "../../classes";
import { logger } from "../logger/logger";



//RESPONSE SUCCESS
export const responseSuccess = ( message:string, data:any=[], userDto?:UserDto ):ResDto =>{
    const res = new ResDto();
        res.success=true,
        res.message=message,
        res.data=data
    logger.setContext(`RES SUCCESS`)
    //logger.log(JsonToStringfi(res))
    logger.log(res.message)
    return res;
}

//RESPONSE ERROR
export const responseError = ( message:string, error:string, data:any=[] , userDto?:UserDto):ResDto =>{
    const res = new ResDto();
        res.success=false,
        res.error=error,
        res.message=message,
        res.data=data
    logger.setContext(`RES`)
    //logger.error(JsonToStringfi(res))
    logger.error(res.message)
    return res;
}