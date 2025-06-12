import { lazy } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
// const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
// const CarPage = lazy(() => import("./pages/CarPage/CarPage.jsx"));


export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarPage />} /> */}
      </Routes>
      
    </>
  );
};

export default App;