function jalankanFungsi() {
  const kumpulanJawaban = [
    "Gak tau kok nanya saya",
    "Kamu nanyakkk",
    "Mungkin saja",
    "Banyak banyak berdoa",
    "Kamu sudah yakin?",
    "Gak bahaya ta?",
  ];

  const jawabanAcak = Math.floor(Math.random() * kumpulanJawaban.length);
  const hasilAcak = kumpulanJawaban[jawabanAcak];

  document.getElementById("jawaban").innerHTML = hasilAcak;
  document.getElementById("tampilSekali").disabled = true;
}
