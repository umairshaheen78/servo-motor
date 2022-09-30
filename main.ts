input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
    pins.servoWritePin(AnalogPin.P0, 90)
})
