import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CoinflipForm } from './CoinflipForm';
import { Header } from './Header';

export const CoinflipPage = () => {
    return(
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CoinflipForm />
                    </div>
                    <div className="col-md-4">
                        {/* TODO: RESULTS PANEL */}
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                {/* TODO: FLIPS TABLE / ERROR PANEL */}
            </div>
        </div>
    );   
}