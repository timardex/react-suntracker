/* convert am/pm to 24h */
export const convertAMPMto24h = (time) => {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    //let seconds = "0" + date.getSeconds();

    return hours + minutes.substr(-2);
}

export const convertTimestamp = (time) => {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes;
}