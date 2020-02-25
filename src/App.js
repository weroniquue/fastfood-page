import React from 'react';
import './App.scss';
import WelcomeHeader from "./welocome-header/WelcomeHeader";
import OffersSection from "./offers-section/OffersSection";
import DeliverySection from "./delivery-section/DeliverySection";

class App extends React.Component {

    render() {
        return (
		        <div>
			        <WelcomeHeader/>
			        <OffersSection/>
			        <DeliverySection/>
		        </div>
        );
    }
}

export default App;
