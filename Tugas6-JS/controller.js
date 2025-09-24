// controller.js
import users from "./data.js";

const index = () => {
  console.log("=== Semua Data ===");
  users.forEach((u, i) => console.log(`${i + 1}. ${u.nama} - ${u.umur} - ${u.alamat} - ${u.email}`));
};

const show = (i) => {
  if (i >= 0 && i < users.length) {
    const u = users[i];
    console.log(`Detail User: ${u.nama}, ${u.umur}, ${u.alamat}, ${u.email}`);
  } else {
    console.log("Index tidak valid!");
  }
};

const store = (user) => {
  users.push(user);
  console.log(`User ${user.nama} berhasil ditambahkan!`);
};

const destroy = (i) => {
  if (i >= 0 && i < users.length) {
    const removed = users.splice(i, 1);
    console.log(`User ${removed[0].nama} berhasil dihapus!`);
  } else {
    console.log("Index tidak valid!");
  }
};

export { index, show, store, destroy };
