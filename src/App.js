import React from 'react';
import './App.scss';
import WelcomeHeader from "./welocome-header/WelcomeHeader";
import OffersSection from "./offers-section/OffersSection";

class App extends React.Component {

    render() {
        return (
		        <div>
			        <WelcomeHeader/>
			        <OffersSection/>
		        </div>
        );
    }
}

export default App;
