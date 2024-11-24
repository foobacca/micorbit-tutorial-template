let randomnumber = 0
input.onGesture(Gesture.Shake, function () {
    randomnumber = randint(1, 3)
    if (randomnumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (randomnumber == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
