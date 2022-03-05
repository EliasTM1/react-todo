

class Notomori {
    constructor(id, text, day, reminder) {
        this.id = id;
        this.text = text;
        this.day = day;
        this.reminder = reminder;

    }


    showMeWhatYoutGot() {
        return `Mi nombre es Motomori, mi id es ${this.id} `
    }
}

let today = new Date().getTime()
let random = Math.random()
let alguien = new Notomori(random, "MOTOSHU", today, false)
let alguien2 = new Notomori(random, "CERBERUS", today, false)
let alguien3 = new Notomori(random, "ATLAS", today, false)
let alguien4 = new Notomori(random, "GILGAMESH", today, false)

console.log(alguien)
console.log(alguien2)
console.log(alguien3)
console.log(alguien4)



const tasks = [
    {
        id: 0.24849551567348604,
        text: 'MOTOSHU',
        day: 1646430870888,
        reminder: false
    },
    {
        id: 0.24849551567348604,
        text: 'CERBERUS',
        day: 1646430870888,
        reminder: false
    },
    {
        id: 0.24849551567348604,
        text: 'ATLAS',
        day: 1646430870888,
        reminder: false
    },
    {
        id: 0.24849551567348604,
        text: 'GILGAMESH',
        day: 1646430870888,
        reminder: false
    }

]

