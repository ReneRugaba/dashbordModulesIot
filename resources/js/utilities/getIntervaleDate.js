import { intervalToDuration } from 'date-fns'

export const GetIntervaleDate =(date) => {
    const intervalobject = intervalToDuration({
        start: new Date(date),
        end: new Date()
    })

    if(intervalobject.minutes){
        return ` ${intervalobject?.years} 
        years ${intervalobject?.months} 
        months ${intervalobject?.days} 
        days ${intervalobject?.hours} hours`
    }
    else{
        return ` ${intervalobject.seconds} seconds`
    }
}