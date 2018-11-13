function changeH1TitleDescriptionDisplay() {
	let descriptionStyle = document.getElementById("h1-title-description").style.display;
	if (descriptionStyle == "none" || descriptionStyle == "") {
		document.getElementById("h1-title-description").style.display = "block"
	}
	else {
		document.getElementById("h1-title-description").style.display = "none"
	}
}

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

function cardMaker(theme, number, date, text) {
	this.theme = theme;
	this.number = number;
	this.date = date;
	this.text = text
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

function randArr(list){
	l = [];
	h = 0;
	iter = list.length
	for (i = 0; i < iter; i++){
		h = randomInteger(0, list.length - 1);
		l.push(list[h]);
		list.splice(h,1);
	}
	return l
}

function nextCard() {
	document.getElementById("removeCardButton").removeAttribute("disabled");
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
	cardsQueue.delete_first();
	nextCard()
}


cardsArray = [
new cardMaker(0, 1, "1 млн. років тому", "Поява найдавніших людей на території сучасної України."),
new cardMaker(0, 2, "1 млн – 11 тис. років тому", "Палеоліт або давній кам'яний вік."),
new cardMaker(0, 3, "Близько 40–35 тис. років тому", "Поява на території сучасної України лю­дини сучасного типу."),
new cardMaker(0, 4, "10–8 тис. років тому", "Мезоліт або середній кам'яний вік."),
new cardMaker(0, 5, "8–5 тис. років тому", "Неоліт або новий кам'яний вік."),
new cardMaker(0, 6, "Початок 4 – середина 3 тис. до н. е.", "Енеоліт або мідно-кам'яний вік."),
new cardMaker(0, 7, "2 тис. р. до н.е. – VIII ст. до н.е.", "Бронзовий вік."),
new cardMaker(0, 8, "VIII-IV ст. до н.е.", "Ранній залізний вік."),
new cardMaker(0, 9, "IX-VII ст. до н.е.", "Панування в північних степах України кімерійців."),
new cardMaker(0, 10, "VII-III ст. до н.е.", "Перебування на українських землях “скіфів”"),
new cardMaker(0, 11, "III ст. до н.е. – III ст. н.е.", "Проживання на півдні України сарматів."),
new cardMaker(0, 12, "І-ІІ ст.", "Перші згадки про слов'ян-венедів у писемних джерелах."),
new cardMaker(0, 13, "	III-IV ст.", "Перебування готів на українських землях."),
new cardMaker(0, 14, "V-VII ст.", "Велике слов'янське розселення."),
new cardMaker(1, 15, "Кінець VIII – початок IX ст.", "Утворення Київського князівства."),
new cardMaker(1, 16, "860 р.", "Перший похід русичів, очолюваних князем Аскольдом на Константинополь (Царгород)."),
new cardMaker(1, 17, "882 р.", "Убивство князя Аскольда та захоплення князівської влади в Києві Олегом. Виникнення держави Київська Русь."),
new cardMaker(1, 18, "907, 911р.", "Походи князя Олега на Царгород."),
new cardMaker(1, 19, "941, 944 р.", "Походи князя Ігоря на Візантію."),
new cardMaker(1, 20, "945 р.", " Повстання деревлян і вбивство князя Ігоря."),
new cardMaker(1, 21, "946 р.", "Посольство княгині Ольги до Царгорода."),
new cardMaker(1, 22, "968 р.", "Перший Балканський похід князя Святослава."),
new cardMaker(1, 23, "969–971 pp.", "Другий Балканський похід князя Святослава."),
new cardMaker(1, 24, "988 р.", "Початок запровадження князем Володимиром християнства як державної релігії Київської Русі"),
new cardMaker(1, 25, "1036 р.", "Розгром князем Ярославом Мудрим печенігів під Києвом."),
new cardMaker(1, 26, "1054 р.", "Перша згадка в літописі Києво-Печерського монастиря."),
new cardMaker(1, 27, "1054–1113 рр.", "Співправління трьох братів Ярославичів – Ізяслава, Святослава та Всеволода."),
new cardMaker(1, 28, "1068 р.", "Повстання в Києві проти Ярославичів."),
new cardMaker(1, 29, "1097 р.", "Любецький з'їзд князів."),
new cardMaker(1, 30, "1113р.", "Народне повстання в Києві."),
new cardMaker(1, 31, "1113 р.", 'Прийняття "Статуту" Володимира Мономаха.'),
new cardMaker(2, 32, "1152–1187 рр.", "Зміцнення Галицького князівства за правління Ярослава Осмомисла."),
new cardMaker(2, 33, "1169 р.", "Захоплення й розорення Києва об'єднаним військом 12 руських князів, очолюваним Андрієм Боголюбським."),
new cardMaker(2, 34, "1185 р.", 'Невдалий похід новгород-сіверського князя Ігоря Святославича проти половців, що став підґрунтям для поеми "Слово о полку Ігоревім".'),
new cardMaker(2, 35, "1187р.", 'Перша літописна згадка назви "Україна" стосовно земель Південної Київщини та Переяславщини.'),
new cardMaker(2, 36, "1199 р.", "Об'єднання волинським князем Романом Мстиславичем Галицької і Волинської земель."),
new cardMaker(2, 37, "1206–1238 pp.", "Утворення Галицько-Волинського князівства Період міжусобиць, боярських змов та іноземного втручання в галицько-волинські справи."),
new cardMaker(2, 38, "31 травня 1223 р.", "Битва на річці Калці."),
new cardMaker(2, 39, "1238 р.", "Утвердження князя Данила Романовича в Галичі. Розгром військом Данила Галицького рицарів-хрестоносців під Дорогочином."),
new cardMaker(2, 40, "1239 р.", "Спустошення монголами Переяславської й Чернігівської земель."),
new cardMaker(2, 41, "Кінець листопада – початок грудня 1240 р.", "Облога й захоплення Києва військами монгольського хана Батия."),
new cardMaker(2, 42, "Грудень 1240 р. – березень 1241 р.", "Спустошення монголами земель Київського та Галицько-Волинського князівств."),
new cardMaker(2, 43, "17 серпня 1245 р.", "Ярославська битва."),
new cardMaker(2, 44, "1253 р.", "Коронування Данила Галицького послами Папи Римського Інокентія IV."),
new cardMaker(2, 45, "1264 р.", "Смерть Данила Галицького."),
new cardMaker(2, 46, "1264–1301 pp.", "Князювання Лева Даниловича  (сина Данила Галицького) у Галицькій та Перемишльській землях."),
new cardMaker(2, 47, "1269–1288 pp.", "Князювання Володимира Васильковича (сина Василька Романовича, брата Данила Галицького) на Волині."),
new cardMaker(2, 48, "1301–1308(15) pp.", "Правління Юрія І Львовича, що об'єднав під своєю владою всі землі Галицько-Волинської держави"),
new cardMaker(2, 49, "1315–1323 pp.", "Князювання в Галицько-Волинському князівстві Андрія та Лева II Юрійовичів"),
new cardMaker(2, 50, "1324–1340 pp.", "Князювання в Галицько-Волинській державі Мазовецького княжича Болеслава Юрія II")
]

themesArray = ["", "Виникнення та розквіт  Київської Русі", "Київська Русь за часів роздробленості. Галицько-Волинська держава"]

cardsArray = randArr(cardsArray);

cardsQueue = new Queue;

cardsArray.forEach(function(item, i, cardsArray) {
	console.log("pered: " + themesArray[item.theme]);
	item.theme = themesArray[item.theme];
	console.log("after: " + themesArray[item.theme]);
	cardsQueue.enqueue(item);
});

document.getElementById("h1-title").innerText = "Карток залишилось: " + cardsQueue.items.length;	
