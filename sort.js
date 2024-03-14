/*
    1. terdapat sebuah array data nilai bernama nilai
    2. Buatlah data dalam array tersebut berurutan dari TERBESAR hingga TERKECIL
    3. Setelah itu tampilkan data tersebut pada terminal
*/

var arr = [100, 8, 29, 10, 35, 28, 1, 5, 8, 28, 70, 83, 20, 95, 10];

//cara lain dari kak farhan 

// arr.sort(function (x,y) {
//     return y - x;
// });

arr.sort((a, b) => b - a);
console.log("Urutan Terbesar hingga Terkecil = " + arr);
