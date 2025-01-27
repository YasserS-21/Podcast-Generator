export function formatTimeStamp (timestamp, duration) {
    let startTime = Math.floor(timestamp/60)
    let endTime = Math.floor((timestamp+duration)/60)
    return [`${startTime}:${Math.round(timestamp)%60 < 10 ? `0${Math.round(timestamp)%60}` : Math.round(timestamp)%60}`, `${endTime}:${Math.round(timestamp+duration)%60 < 10 ? `0${Math.round(timestamp+duration)%60}` : Math.round(timestamp+duration)%60}`]
}