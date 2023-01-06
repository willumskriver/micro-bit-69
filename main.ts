let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.EightG, function () {
    basic.showString("" + (input.buttonIsPressed(Button.A)))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("love tester")
    basic.showNumber(randint(0, 100))
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(Math.sqrt(86987))
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("ahh")
})
