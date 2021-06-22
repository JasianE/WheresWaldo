function humanReadable(second){
    let hours = Math.floor(second/3600)
    let minutes = Math.floor((second - hours * 3600)/60)
    let seconds = Math.floor(second - (hours * 3600) - (minutes * 60))
    
    if(hours.toString(10).length === 1){
        hours = '0' + hours
    }
    if(minutes.toString(10).length === 1){
        minutes = '0' + minutes
    }
    if(seconds.toString(10).length === 1){
        seconds = '0' + seconds
    }
    return `${hours}:${minutes}:${seconds}`
}
export default humanReadable