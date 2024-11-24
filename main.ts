let volume = 0
let sleeptime = 0
input.onGesture(Gesture.TiltLeft, function () {
    volume = volume + 1
    if (volume > 120) {
        volume = 120
    }
    music.setVolume(volume)
})
input.onGesture(Gesture.TiltRight, function () {
    volume = volume - 1
    if (volume < 10) {
        volume = 10
    }
    music.setVolume(volume)
})
loops.everyInterval(sleeptime, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
