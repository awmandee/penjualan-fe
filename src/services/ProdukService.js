import axios from "axios";

// sumber database api mas roni
const REST_API_BASE_URL = "https://api.roniprsty.com/produk/";

// view list produk
export const listProduk = () => axios.get(REST_API_BASE_URL + "read.php");

//add produk
export const addProduk = (newProduct) =>
    axios.post(REST_API_BASE_URL + "create.php", newProduct);

//update produk
export const updateProduk = (id, updatedProduct) =>
    axios.post(REST_API_BASE_URL + "update.php", {
        id,
        ...updatedProduct,
    });

//delete produk
// export const deleteProduk = (id) =>
//     axios.post(REST_API_BASE_URL + "delete.php", { id });

// delete sheila
export const deleteProduk = (id) => {
    return axios.get(`${REST_API_BASE_URL}delete.php?id=${id}`);
};
