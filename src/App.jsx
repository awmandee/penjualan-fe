import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//memanggil HEaderComponents serta FooterComponent ke dalam app jsx
import HeaderComponent from "./components/templates/HeaderComponent";
import FooterComponent from "./components/templates/FooterComponent";
import AddProdukComponent from "./components/produk/AddProdukComponent";
//memanggil dari kelas listProdukComponents
import ListProdukComponent from "./components/produk/ListProdukComponent";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <HeaderComponent />
                <div className="flex-grow-1">
                    <Routes>
                        <Route
                            path="/tambah-produk"
                            element={<AddProdukComponent />}
                        />
                        <Route
                            path="/list-produk"
                            element={<ListProdukComponent />}
                        />
                        {/* rute lainnya bisa ditambahkan disini */}
                    </Routes>
                </div>
                <FooterComponent />
            </div>
        </Router>
    );
}

export default App;
