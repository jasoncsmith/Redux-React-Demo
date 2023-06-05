import React from 'react';
import CarShowcase from './components/carShowcase/CarShowcase';
import TruckShowcase from './components/truckShowcase/TruckShowcase';
import './app.css';

function App() {
    return (
        <div className="app">
            <CarShowcase />
            <TruckShowcase />
        </div>
    );
}

export default App;
