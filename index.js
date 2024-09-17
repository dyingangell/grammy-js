require('dotenv').config()
const { Bot } = require("grammy")

const bot = new Bot(process.env.BOT_API_KEY)
let time = new Date()
let hour = time.getSeconds()
let weekday = time.getDay()
const date1 = new Date(Date.UTC(2024, 8, 16));
let weeks
let data = {
	1: {
		day: 'monday',
		lessons: {
			first: 'мат анализ',
			second: 'основы програмирования(семинар)',
			third: 'компьютерная архитектура'

		}
	},
	2: {
		day: 'Thuesday',
		lessons: {
			first: 'none',
			second: 'none',
			third: 'линейная алгебра'

		}
	},
	3: {
		day: 'Wensday',
		lessons: {
			first: 'none',
			second: 'основы програмирования',
			third: 'eng'

		}
	},
	4: {
		day: 'Thursday',
		lessons: {
			first: 'none',
			second: 'Азербайджанский',
			third: 'основы програмивроания '

		}
	},
	5: {
		day: 'Friday',
		lessons: {
			first: 'мат анализ',
			second: 'англиский',
			third: 'none'

		}
	}

}
bot.command("start", async (cth) => {
	setInterval(main, 1000)
	async function main() {
		let date2 = new Date();
		let day_diff = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))
		if (Math.ceil(day_diff / 7) % 2 == 0) {
			weeks = 'down'
		} else {
			weeks = 'up'
		}
		if (weeks == 'up') {
			data[2].lessons.second = 'линейная алгебра(семинар)'
			data[5].lessons.third = 'Азербайджанский'


		} else {
			data[3].lessons.second = 'основы програмирования'
			data[4].lessons.second = 'компьютерная архитектура(семинар)'
		}
		time = new Date()
		hour = time.getHours()
		weekday = time.getDay() + 1

		if (hour == 2) {
			await cth.reply(`day: ${data[weekday].day} \nweek: ${weeks} \nlessons:\n  							first: ${data[weekday].lessons.first} \n  							second: ${data[weekday].lessons.second} \n  							third: ${data[weekday].lessons.third}`)

		}
	}

})

bot.start()