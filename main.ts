input.onGesture(Gesture.LogoUp, function () {
    led.plotBrightness(1, 0, 60)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Klasse 10C")
})
input.onGesture(Gesture.Shake, function () {
    led.plot(1, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(9)
})
basic.showIcon(IconNames.Square)
