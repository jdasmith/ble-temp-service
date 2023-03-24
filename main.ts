bluetooth.onBluetoothConnected(function () {
    num_connects += 1
    basic.showIcon(IconNames.Happy)
})
bluetooth.startTemperatureService()
let num_connects = 0
basic.forever(function () {
    basic.showString("Num Connects: ")
    basic.showNumber(num_connects)
    basic.pause(1000)
    basic.showString("Temperature: ")
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
