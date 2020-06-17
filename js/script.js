'use strict';

//Объявление переменных
let books = document.querySelector('.books'),
  book = books.querySelectorAll('.book'),
  adv = document.querySelector('.adv'),
  headerBook3 = book[4].querySelector('h2 > a'),
  itemListBook2 = book[0].querySelectorAll('li'),
  itemListBook5 = book[5].querySelectorAll('li'),
  itemListBook6 = book[2].querySelectorAll('li'),
  itemBook6 = document.createElement('li');


//Восстановление порядка книг
book[0].before(book[1]);
book[3].before(book[4]);
books.append(book[2]);


//Замена картинки заднего фона на другую из папки image
document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';


//Исправление заголовка в книге 3
headerBook3.textContent = 'Книга 3. this и Прототипы Объектов';


//Удаление рекламы со страницы
adv.remove();


//Восстановление порядка глав во второй и пятой книге
itemListBook2[10].before(itemListBook2[2]);
itemListBook2[3].after(itemListBook2[6]);
itemListBook2[4].before(itemListBook2[8]);

itemListBook5[1].after(itemListBook5[9]);
itemListBook5[4].after(itemListBook5[2]);
itemListBook5[8].before(itemListBook5[5]);

//Добавление главы “Глава 8: За пределами ES6” в шестую книгу и постановка её в правильное место
itemBook6.textContent = 'Глава 8: За пределами ES6';
itemListBook6[8].after(itemBook6);