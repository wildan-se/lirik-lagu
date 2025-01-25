// Ambil elemen dengan id "root" dari DOM untuk menempatkan lirik yang akan ditampilkan
let root = document.getElementById("root");

// Daftar lirik dan durasi tampilannya masing-masing (dalam milidetik)
let lirik = [
  ["Sekejap cinta yang terjalin Dan menjadi sebuah cerita", 7000],
  ["Yang tak mungkin terlupa Terukir di hati...", 6500],
  ["dan tak mau pergi...", 2500],
  ["Mungkinkah kumiliki Cinta seperti ini lagi..", 6000],
  ["Jangan biarkan aku Kehilangan diri... mu...", 5500],
  ["Coba dengarkanlah sumpahku (Janji suci) dari hati", 8000],
  ["Aku cinta kamu...", 1000],
  ["Jangan dengar kata mereka Yang tak ingin kita satu", 6000],
  ["Yakinkan aku milikmu Aku milikmu...", 5000],
];

// Waktu penundaan sebelum lirik berikutnya muncul (2, 3, 4, 5, 6, 7, 8)
const sebelumDelay = [100, 1000, 3500, 1500, 2500, 2000, 4000, 3000];

/**
 * Fungsi untuk menampilkan lirik satu per satu dengan efek mengetik
 * @param {Array} lirik - Array berisi lirik dan durasi tampilannya
 */
function tampilkanLirik(lirik) {
  let totalDelay = 0; // Total penundaan waktu untuk mengatur kapan setiap baris lirik muncul

  // Loop melalui setiap baris lirik
  lirik.forEach(([baris, barisDurasi], barisIndex) => {
    // Set waktu penundaan untuk setiap baris lirik
    setTimeout(() => {
      // Buat elemen paragraf untuk baris lirik baru
      let p = document.createElement("p");
      // Tambahkan kelas "fade-in" dan "lyrics" untuk animasi dan gaya
      p.classList.add("fade-in", "lyrics");
      // Hapus lirik sebelumnya sebelum menambahkan lirik baru
      root.innerHTML = "";
      // Tambahkan elemen paragraf baru ke elemen root
      root.appendChild(p);
      // Buat elemen span untuk menampung teks lirik
      let span = document.createElement("span");
      // Tambahkan span ke dalam paragraf
      p.appendChild(span);
      // Hitung waktu penundaan antara karakter berdasarkan durasi baris
      const sebelumDelayKalimat = barisDurasi / baris.length;
      // Loop melalui setiap karakter dalam baris lirik
      baris.split("").forEach((karakter, karakterIndex) => {
        // Set waktu penundaan untuk setiap karakter
        setTimeout(() => {
          // Tambahkan karakter ke dalam teks span satu per satu
          span.textContent += karakter;
        }, sebelumDelayKalimat * karakterIndex);
      });
    }, totalDelay);
    // Tambahkan durasi baris dan penundaan sebelum ke totalDelay untuk baris berikutnya
    totalDelay += barisDurasi + sebelumDelay[barisIndex];
  });
}

// Panggil fungsi untuk menampilkan lirik dengan efek
tampilkanLirik(lirik);
