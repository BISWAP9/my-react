

const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: 1,
	about: "Тут я рассказываю о себе",
	avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
	0:{name:"Валения ", lastname:"Промова"},
	1:{name:"Костят", lastname:"Шорхов"},
	2:{name:"Валенок", lastname:"Богатов"},
	3:{name:"Знахарь", lastname:"Купаев"},
	4:{name:"Лог", lastname:"Газаев"},
	5:{name:"Логр", lastname:"Газаевич"},
};

export function getUser() {
	return user;
}

export function getUsers() {
  return users; 
}