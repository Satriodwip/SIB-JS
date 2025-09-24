// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Monitor", harga: 3000000 },
  { id: 5, nama: "Keyboard", harga: 500000 }
];

// minimal 5 kode

// **Event Handler**
const eventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (id) => hapusProduk(id),
  tampil: () => tampilkanProduk()
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
  console.log("Produk berhasil ditambahkan!");
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
  produkList = produkList.filter(p => !id.includes(p.id));
  console.log("Produk berhasil dihapus!");
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("Daftar Produk:");
  for (const { id, nama, harga } of produkList) {
    console.log(`${id}. ${nama} - Rp ${harga}`);
  }
}

// --- Simulasi Event ---
tampilkanProduk(); 
eventHandler.tambah(6, "Mouse", 250000);
tampilkanProduk();
eventHandler.hapus(2, 4);
tampilkanProduk();
