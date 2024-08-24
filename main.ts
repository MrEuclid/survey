input.onButtonPressed(Button.A, function () {
    total += 1
    helmet += 1
    basic.showNumber(1)
    basic.pause(200)
    basic.clearScreen()
    datalogger.log(
    datalogger.createCV("a", helmet),
    datalogger.createCV("t", no_helmet),
    datalogger.createCV("b", total)
    )
})
input.onButtonPressed(Button.B, function () {
    total += 1
    no_helmet += 1
    basic.showNumber(0)
    basic.pause(200)
    basic.clearScreen()
    datalogger.log(
    datalogger.createCV("a", helmet),
    datalogger.createCV("t", no_helmet),
    datalogger.createCV("b", total)
    )
})
let no_helmet = 0
let helmet = 0
let total = 0
basic.showString("H")
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.mirrorToSerial(true)
total = 0
helmet = 0
no_helmet = 0
