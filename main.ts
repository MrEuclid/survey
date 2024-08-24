input.onButtonPressed(Button.A, function () {
    helmet += 1
    total += 1
    basic.showNumber(0)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    no_helmet += 1
    total += 1
    basic.showNumber(0)
    basic.pause(100)
    basic.clearScreen()
})
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
datalogger.mirrorToSerial(true)
basic.showString("H")
let helmet = 0
let no_helmet = 0
let total = 0
basic.forever(function () {
    datalogger.log(
    datalogger.createCV("t", total),
    datalogger.createCV("h", helmet),
    datalogger.createCV("nh", no_helmet)
    )
})
