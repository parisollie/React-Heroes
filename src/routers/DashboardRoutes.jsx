import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
    return (
        <>
            {/**Paso 1.7 */}
            <Navbar />

            <div className="container mt-2">
                <Routes>
                    <Route path="/protagonists" element={<MarvelScreen />} />
                    <Route path="/tw/:twId" element={<HeroScreen />} />
                    <Route path="/antagonists" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} /> {/*Paso 2.16 */}


                    {/* Redirección */}
                    <Route path="*" element={<Navigate to="/marvel" replace />} />
                </Routes>
            </div>


        </>
    )
}
