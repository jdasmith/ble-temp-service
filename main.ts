bluetooth.onBluetoothConnected(function () {
    num_connects += 1
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startTemperatureService()
let num_connects = 0
bluetooth.startLEDService()
bluetooth.startAccelerometerService()
bluetooth.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
