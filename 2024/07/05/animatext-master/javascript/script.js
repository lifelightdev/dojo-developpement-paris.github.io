import AnimationController from "./controllers/animation_controller.js"

const animationController = new AnimationController({
  texts: [
    "In a quiet room, under the soft moon's gleam",
    "Sat a Jeep named Jeep, lost in a musical dream.",
    "His fingers, like steel, struck the keys with might",
    "Rolling over the ivories, with a touch not light.",

    "He yearned for melodies, gentle and sweet",
    "But his heavy hands made the keys retreat.",
    "Rolling over the chords in a clumsy spree",
    "Rolling over the notes, setting chaos free."
  ],
  numberOfAnimationCharsForCharacter: 1,
})
animationController.animationsLoop()
const animationController2 = new AnimationController({
  texts: [
    "In a quiet room, under the soft moon's gleam",
    "Sat a Jeep named Jeep, lost in a musical dream.",
    "His fingers, like steel, struck the keys with might",
    "Rolling over the ivories, with a touch not light.",

    "He yearned for melodies, gentle and sweet",
    "But his heavy hands made the keys retreat.",
    "Rolling over the chords in a clumsy spree",
    "Rolling over the notes, setting chaos free."
  ],
  numberOfAnimationCharsForCharacter: 30,
})
animationController2.animationsLoop()