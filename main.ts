let temp = 0
OLED.init(64, 128)
basic.forever(function () {
    temp = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P3)
    OLED.clear()
    OLED.writeString("Temperature:")
    OLED.writeNum(temp)
    if (temp > 30) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
})
