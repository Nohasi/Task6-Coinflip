import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CoinflipForm } from './CoinflipForm';
import { FlipsPanel } from './FlipsPanel';
import { Header } from './Header';
import { ResultPanel } from './ResultPanel';

export const CoinflipPage = () => {
    // Output States
    let [result, setResult] = useState('');
    let [rounds, setRounds] = useState([]);

    let [pageInteraction, setPageInteraction] = useState(false);

    let [errorStatus, setErrorStatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    return(
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CoinflipForm
                            setResult={setResult}
                            setRounds={setRounds}
                            setPageInteraction={setPageInteraction}
                            setErrorStatus={setErrorStatus}
                            setErrorMessage={setErrorMessage}
                        />
                    </div>
                    <div className="col-md-4">
                        {
                            pageInteraction
                            ? <ResultPanel
                                result={result}
                                errorStatus={errorStatus}
                              />
                            : <div/>
                        }
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                {
                    pageInteraction
                    ? <FlipsPanel
                        rounds={rounds}
                        errorMessage={errorMessage}
                        errorStatus={errorStatus}
                      />
                    : <div/>
                }
            </div>
        </div>
    );   
}