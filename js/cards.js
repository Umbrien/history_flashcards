function changeH1TitleDescriptionDisplay() {
	let descriptionStyle = document.getElementById("h1-title-description").style.display;
	if (descriptionStyle == "none" || descriptionStyle == "") {
		document.getElementById("h1-title-description").style.display = "block"
	}
	else {
		document.getElementById("h1-title-description").style.display = "none"
	}
}

function cardMaker(theme, number, date, text) {
	this.theme = theme;
	this.number = number;
	this.date = date;
	this.text = text
}


cardsArray = [
new cardMaker("legends", 1, "18 грудня 1955", "Народився Стів Джобс"),
new cardMaker("legends", 2, 1969, "Народився Лінус Торвальдс"),
new cardMaker("legends", 3, 1984, "Народився Марк Цукерберг")
]


class Queue{
	constructor() {
		this.items = new Array()
	}

	is_empty() {
		return this.items.length == 0
	}

	//добавляет в начало
	enqueue(item) {
 		this.items.unshift(item)
	}

	//удаляет из конца и возращает
	dequeue() {
		return this.items.pop()
	}

	delete_first(){
		this.items.shift()
	}

	print_queue() {
		console.log(this.items);
	}
}

cardsQueue = new Queue;

cardsArray.forEach(function(item, i, cardsArray) {
	cardsQueue.enqueue(item);
});


document.getElementById("h1-title").innerText = "Карток залишилось: " + cardsQueue.items.length;

function nextCard() {
	if (cardsQueue.is_empty()) {
		document.getElementById("frontCardText").innerText = "Ви запам'ятали усі картки";
		document.getElementById("backCardDate").innerText = "Ви запам'ятали усі картки"
	}
	else if (cardsQueue.items.length == 1) {
		document.getElementById("removeCardButton").style.display = "none";
		document.getElementById("nextCardButton").style.display = "none"
	}
	document.getElementById("h1-title").innerText = "Карток залишилось: " + cardsQueue.items.length;
	lastItem = cardsQueue.dequeue();
	document.getElementById("frontCardTheme").innerText = lastItem.theme;
	document.getElementById("frontCardNumber").innerText = "#" + lastItem.number;
	document.getElementById("frontCardText").innerText = lastItem.text;
	document.getElementById("backCardTheme").innerText = lastItem.theme;
	document.getElementById("backCardNumber").innerText = "#" + lastItem.number;
	document.getElementById("backCardDate").innerText = lastItem.date;
	cardsQueue.enqueue(lastItem)
}

function removeCard() {
	cardsQueue.delete_first()
}
