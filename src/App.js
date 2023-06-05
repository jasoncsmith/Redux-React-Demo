import React from 'react';
import './app.css';
import CarShowcase from './components/carShowcase/CarShowcase';
import TruckShowcase from './components/truckShowcase/TruckShowcase';
import './index.css';
function App() {
    return (
        <div className="app">
            <CarShowcase />
            <TruckShowcase />
        </div>
    );
}

export default App;
