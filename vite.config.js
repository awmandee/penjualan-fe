import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


//UNTUK MENGOBAH PORT LOCALHOST SESUAI APA YANG KITA BUAT YAITU MENJADI: 1234
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    server: {
        port: 1234,
    },
});
