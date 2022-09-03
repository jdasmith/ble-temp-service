bluetooth.onBluetoothConnected(function () {
    num_connects += 1
})
bluetooth.startTemperatureService()
let num_connects = 0
basic.forever(function () {
    basic.showNumber(num_connects)
    basic.pause(2000)
    basic.showString(control.deviceName())
    basic.pause(2000)
    basic.showString("" + (control.deviceSerialNumber()))
    basic.pause(2000)
})
