let Reaction_Game = false
// Begins The Game On Shake - Randomizes Time Of Melody
input.onGesture(Gesture.Shake, function () {
    Reaction_Game = false
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
    basic.pause(randint(5000, 10000))
    Reaction_Game = true
    music.stopMelody(MelodyStopOptions.All)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
// Controls Which Player Wins And The Specific Reaction
basic.forever(function () {
    while (Reaction_Game) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            Reaction_Game = false
            for (let index = 0; index < 2; index++) {
                music.playMelody("C5 B A G F E D C ", 120)
                pins.digitalWritePin(DigitalPin.P0, 1)
            }
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                Reaction_Game = false
                for (let index = 0; index < 2; index++) {
                    music.playMelody("C D E F G A B C5 ", 120)
                    pins.digitalWritePin(DigitalPin.P0, 2)
                }
            }
        }
        basic.pause(3000)
        basic.clearScreen()
    }
})
