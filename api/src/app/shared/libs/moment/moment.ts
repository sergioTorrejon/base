import moment = require('moment');

//TODO: REVISAR SI SE PUEDE MEJORAR
export const MomentDate= () => { 
    return  moment(new Date());
}

export const getTimeMoment = (format:string) => { 
    return moment().format(format)
}

/* export const lastDayMontMoment = () => { 
    return  moment(firstDayMontMoment()).subtract(1,'days').format('YYYY-MM-DD')
}
 */
