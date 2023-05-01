const baseTags = {
	0: 'Figma',
	1: 'Верстка',
	2: 'JS',
	3: 'PHP',
	4: 'Прочее'
}

class TimeEntry {
	constructor(time, task, date, ...tags) {
		this.time = time
		this.task = task
		this.date = date
		this.tags = tags
	}

	get allInfo() {
		return [this.time, this.task, this.date, this.getTag]
	}

	get getTag() {
		this.tagList = []

		this.tags.forEach(tag => {
			switch (tag) {
				case 0:
					this.tagList.push('Figma')
					break
				case 1:
					this.tagList.push('Верстка')
					break
				case 2:
					this.tagList.push('JS')
					break
				case 3:
					this.tagList.push('PHP')
					break
				case 4:
					this.tagList.push('Прочее')
					break
			}
		})

		return this.tagList
	}

	set setTime(newTime) {
		this.time = newTime
	}

	set setTask(newTask) {
		this.task = newTask
	}

	set setDate(newDate) {
		this.date = newDate
	}

	set setTags(newTags) {
		this.tags = newTags
	}
}

let time = new TimeEntry(1, 'Главная страница', '2023-01-01', 1, 2)
console.log(time.allInfo)