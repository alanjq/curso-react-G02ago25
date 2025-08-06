import { Route, Routes } from "react-router";
import Layout from "./Layout";
import HomePage from "./views/HomePage";
import SaludoPage from "./views/SaludoPage";


export default function App() {
    // Nuestra aplicación va aquí
    return <div>

        {/* Enrutamiento */}
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Index */}
                <Route index element={<HomePage />} />

                {/* Saludo */}
                <Route path="saludo" element={<SaludoPage />} />

                {/* Otras rutas */}
                <Route path="*" element={<div>No encontrado.</div>} />
            </Route>
        </Routes>

    </div>
}
