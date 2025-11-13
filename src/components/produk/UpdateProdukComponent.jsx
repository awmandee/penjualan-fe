import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { listProduk, updateProduk } from "../../services/ProdukService";

function UpdateProdukComponent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [produk, setProduk] = useState({
        nama_produk: "",
        jenis_produk: "",
        stok: "",
        harga_beli: "",
        harga_jual: "",
        status: "Tersedia",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await listProduk();
                const data = response.data.find((p) => p.id == id);
                if (data) setProduk(data);
                else setError("Produk tidak ditemukan.");
            } catch (err) {
                console.error("Error:", err);
                setError("Gagal memuat data produk.");
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProduk({ ...produk, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            await updateProduk(id, produk);
            setSuccess("Produk berhasil diperbarui!");
            setTimeout(() => navigate("/list-produk"), 1500);
        } catch (err) {
            console.error("Error updating product:", err);
            setError("Gagal memperbarui produk.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-warning text-dark">
                    <h4 className="mb-0">✏️ Edit Produk</h4>
                </div>
                <div className="card-body bg-light">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && (
                        <div className="alert alert-success">{success}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nama_produk" className="form-label">
                                Nama Produk
                            </label>
                            <input
                                type="text"
                                id="nama_produk"
                                className="form-control"
                                value={produk.nama_produk}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="jenis_produk"
                                className="form-label"
                            >
                                Jenis Produk
                            </label>
                            <input
                                type="text"
                                id="jenis_produk"
                                className="form-control"
                                value={produk.jenis_produk}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="stok" className="form-label">
                                Stok
                            </label>
                            <input
                                type="number"
                                id="stok"
                                className="form-control"
                                value={produk.stok}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="harga_beli" className="form-label">
                                Harga Beli
                            </label>
                            <input
                                type="number"
                                id="harga_beli"
                                className="form-control"
                                value={produk.harga_beli}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="harga_jual" className="form-label">
                                Harga Jual
                            </label>
                            <input
                                type="number"
                                id="harga_jual"
                                className="form-control"
                                value={produk.harga_jual}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <select
                                id="status"
                                className="form-select"
                                value={produk.status}
                                onChange={handleChange}
                            >
                                <option value="Tersedia">Tersedia</option>
                                <option value="Tidak Tersedia">
                                    Tidak Tersedia
                                </option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-warning">
                            Simpan Perubahan
                        </button>
                        <Link
                            to="/list-produk"
                            className="btn btn-secondary ms-2"
                        >
                            Kembali
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProdukComponent;
