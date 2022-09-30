input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P0, 90)
})
