function post_form() {
	const autor = document.getElementById("author");
	const mail = document.getElementById("mail");
	const stih = document.getElementById("stih");
	let out = document.getElementById("check");
    let out_cont = document.getElementById("popup_content");

    if (autor.value != "" && mail.value != "" && stih.value != "") {
    	out.innerHTML = `Мы успешно получили ваше стихотворение!`
        out_cont.innerHTML = `Ваше стихотворение должно пройти модерацию перед добавлением на сайт. Мы оповестим вас при добавление по данному адресу ${mail.value}`;
    }
    else {
    	out.innerHTML = `Заполните все поля и повторите отправку!`;
        out_cont.innerHTML = `Проверти правильность заполнение полей формы, укажите корректный адрес электронной почты`;
    }
}

