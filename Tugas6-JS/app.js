import { index, show, store, destroy } from "./controller.js";

const main = () => {
    // Add users 2 data
    console.log("=== Tambah 2 user ===");
    console.log(store({ nama: "John Doe", umur: 30, alamat: "123 Main St", email: "john@example.com" }));
    console.log(store({ nama: "Jane Smith", umur: 25, alamat: "456 Oak Ave", email: "jane@example.com" }));

    // Show user by id
    console.log("\n=== User id=9 ===");
    console.log(show(9));

    // Get all users
    console.log("\n=== Semua user ===");
    console.log(index());

    // Delete user by id
    console.log("\n=== Hapus user id=1 ===");
    console.log(destroy(1));

    // Get all users after delete
    console.log("\n=== Semua user setelah delete ===");
    console.log(index());
};

main();