//Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения 
// в виде «Ключ — Х, значение — Y».

//Используйте шаблонные строки.

let myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}


