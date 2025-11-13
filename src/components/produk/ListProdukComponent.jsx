import React, { useEffect, useState } from "react";
import { listProduk, deleteProduk } from "../../services/ProdukService";
import { Link, useNavigate } from "react-router-dom";

// function ListProdukComponent() {
//     const [produkData, setProdukData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const fetchProduk = async () => {
//         try {
//             const response = await listProduk();
//             setProdukData(response.data);
//         } catch (error) {
//             console.error("Error fetching produk data:", error);
//             setError("Gagal mengambil data produk.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchProduk();
//     }, []);

//     const handleDelete = async (id) => {
//         if (window.confirm("Yakin ingin menghapus produk ini?")) {
//             try {
//                 await deleteProduk(id);
//                 alert("Produk berhasil dihapus!");
//                 fetchProduk(); // refresh list
//             } catch (error) {
//                 console.error("Error deleting product:", error);
//                 alert("Gagal menghapus produk.");
//             }
//         }
//     };

//     const formatCurrency = (value) => {
//         if (isNaN(value)) return "-";
//         return new Intl.NumberFormat("id-ID", {
//             style: "currency",
//             currency: "IDR",
//             minimumFractionDigits: 0,
//         }).format(value);
//     };

//     if (loading) {
//         return (
//             <div className="text-center mt-5">
//                 <div
//                     className="spinner-border text-primary"
//                     role="status"
//                 ></div>
//                 <h5 className="mt-3 text-muted">Memuat data produk...</h5>
//             </div>
//         );
//     }

//     return (
//         <div className="container mt-5">
//             <div className="card shadow-sm border-0">
//                 <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
//                     <h4 className="mb-0">📦 Daftar Produk</h4>
//                     <Link
//                         to="/tambah-produk"
//                         className="btn btn-light btn-sm fw-semibold"
//                     >
//                         + Tambah Produk
//                     </Link>
//                 </div>

//                 <div className="card-body bg-light">
//                     {error && (
//                         <div className="alert alert-danger mb-3">{error}</div>
//                     )}

//                     <div className="table-responsive">
//                         <table className="table table-hover align-middle mb-0">
//                             <thead className="table-primary text-center">
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Nama Produk</th>
//                                     <th>Jenis Produk</th>
//                                     <th>Stok</th>
//                                     <th>Harga Beli</th>
//                                     <th>Harga Jual</th>
//                                     <th>Status</th>
//                                     <th>Aksi</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {produkData.length > 0 ? (
//                                     produkData.map((item) => (
//                                         <tr key={item.id}>
//                                             <td className="text-end">
//                                                 {item.id}
//                                             </td>
//                                             <td className="text-start">
//                                                 {item.nama_produk}
//                                             </td>
//                                             <td className="text-start">
//                                                 {item.jenis_produk}
//                                             </td>
//                                             <td className="text-end">
//                                                 {item.stok}
//                                             </td>
//                                             <td className="text-end text-danger fw-semibold">
//                                                 {formatCurrency(
//                                                     item.harga_beli
//                                                 )}
//                                             </td>
//                                             <td className="text-end text-success fw-semibold">
//                                                 {formatCurrency(
//                                                     item.harga_jual
//                                                 )}
//                                             </td>
//                                             <td
//                                                 className={`text-start fw-semibold ${
//                                                     item.status === "Tersedia"
//                                                         ? "text-success"
//                                                         : "text-danger"
//                                                 }`}
//                                             >
//                                                 {item.status}
//                                             </td>
//                                             <td className="text-center">
//                                                 <button
//                                                     onClick={() =>
//                                                         navigate(
//                                                             `/edit-produk/${item.id}`
//                                                         )
//                                                     }
//                                                     className="btn btn-sm btn-warning me-2"
//                                                 >
//                                                     ✏️ Edit
//                                                 </button>
//                                                 <button
//                                                     onClick={() =>
//                                                         handleDelete(item.id)
//                                                     }
//                                                     className="btn btn-sm btn-danger"
//                                                 >
//                                                     🗑️ Hapus
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td
//                                             colSpan="8"
//                                             className="text-center text-muted py-4"
//                                         >
//                                             Tidak ada produk ditemukan.
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 <div className="card-footer text-muted text-center small">
//                     Data produk diperbarui secara real-time.
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ListProdukComponent;

//yang dari sheila
// import React, { useEffect, useState } from "react";
// import { listProduk, deleteProduk } from "../../services/ProdukServices";
// import { Link, useNavigate } from "react-router-dom";

function ListProdukComponents() {
    const [produkData, setProdukData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fungsi untuk ambil data produk
    const fetchProduk = async () => {
        try {
            setLoading(true);
            const response = await listProduk();
            setProdukData(response.data);
        } catch (error) {
            console.error("Error fetching produk data:", error);
            setError("Gagal mengambil data produk.");
        } finally {
            setLoading(false);
        }
    };

    // Panggil fetchProduk saat komponen pertama kali di-load
    useEffect(() => {
        fetchProduk();
    }, []);

    // Hapus produk dan auto-refresh list
    const handleDelete = async (id) => {
        if (window.confirm("Yakin ingin menghapus produk ini?")) {
            try {
                console.log("Menghapus produk dengan ID:", id);
                const response = await deleteProduk(id);
                console.log("Respon dari server:", response.data);

                if (response.data && response.data.message) {
                    const pesan = response.data.message.toLowerCase();

                    if (pesan.includes("berhasil")) {
                        alert("Produk berhasil dihapus!");
                    } else if (pesan.includes("tidak ditemukan")) {
                        alert("Produk tidak ditemukan di server!");
                    } else {
                        alert("Respon dari server: " + response.data.message);
                    }
                } else {
                    alert("Tidak ada respon dari server.");
                }

                // Refresh data setelah delete
                fetchProduk();
            } catch (error) {
                console.error("Error deleting produk:", error);
                alert(
                    "Gagal menghapus produk. Periksa koneksi atau server API."
                );
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4 px-5">
            <h2 className="mb-4 text-center">List Produk</h2>

            <div className="d-flex justify-content-start mb-3">
                <Link to="/tambah-produk" className="btn btn-primary">
                    Tambah Produk
                </Link>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-striped table-bordered align-middle text-center">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nama Produk</th>
                        <th>Jenis Produk</th>
                        <th>Stok</th>
                        <th>Harga Beli</th>
                        <th>Harga Jual</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {produkData.length > 0 ? (
                        produkData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="text-start">
                                    {item.nama_produk}
                                </td>
                                <td className="text-start">
                                    {item.jenis_produk}
                                </td>
                                <td>{item.stok}</td>
                                <td>
                                    {parseFloat(item.harga_beli).toLocaleString(
                                        "id-ID"
                                    )}
                                </td>
                                <td>
                                    {parseFloat(item.harga_jual).toLocaleString(
                                        "id-ID"
                                    )}
                                </td>
                                <td>{item.status}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() =>
                                            navigate(
                                                `/update-produk/${item.id}`
                                            )
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Tidak ada produk ditemukan.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListProdukComponents;
