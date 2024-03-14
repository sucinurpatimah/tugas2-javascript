/*
    1. Buatlah sebuah object sederhana (nama variabel bebas) dengan isi data seperti berikut:
        - nama: Budiwan
        - umur: 15
        - tanggal lahir: 12/01/2005
        - tempat tinggal: Jalan Mawar Putih
        - domisili: Bekasi
        - status: jomblo
        - pendidikan: universitas
    2. Key dan value harus sama persis, untuk key yang menggunakan spasi, kamu dapat mengubahnya menjadi snake case atau menggunakan '' untuk key nya
    3. Tampilkan data object tersebut pada terminal
*/

//cara lain dari kak farhan menggunakan ''

// var biodata = {
//     nama : "Budiwan",
//     umur : 15,
//     'tanggal lahir' : "12/01/2005",
//     'tempat tinggal' : "Jalan Mawar Putih",
//     domisili : "Bekasi",
//     status : "Jomblo",
//     pendidikan : "Universitas",
// };

// console.log (biodata);

var biodata = {
    nama: "Budiman",
    umur: 15,
    tanggal_lahir: "12/01/2005",
    tempat_tinggal: "Jalan Mawar Putih",
    domisili: "Bekasi",
    status: "Jomblo",
    pendidikan: "Universitas",
};

console.log("Biodata");
Object.keys(biodata).forEach(function(key) {
    console.log(key + " : " + biodata[key]);
});