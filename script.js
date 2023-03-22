// Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте


let stopNum = +prompt('Enter a number')
let fibNum = [0, 1]; 

for (i = 2; i <= stopNum; i++) {
  fibNum[i] = fibNum[i - 2] + fibNum[i - 1];
  console.log(fibNum[i]);
}