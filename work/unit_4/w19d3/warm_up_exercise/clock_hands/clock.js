const clock = (h,m) => {
    if(h < 0 || m < 0 || h > 12 || m > 60) {
        return "out of range"
    }
    if(h === 12 & m === 60){
        h = 0
        m = 0
    }
    let hourAngle = 0.5 * (h * 60 + m)
    let minuteAngle = 6 * m

    let angle = Math.abs(hourAngle - minuteAngle)

return angle
}
console.log(clock(6,00));