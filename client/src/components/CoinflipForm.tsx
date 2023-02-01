import React from "react";

export const CoinflipForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Enter Number of flips & choose desired side</h2>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="text" 
                                    pattern="[0-9]*"
                                    placeholder="Enter Number of Flips" 
                                />
                            </div>
                            <div className="col">
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="Heads" />
                                        Heads
                                    </label>
                                    &nbsp;&nbsp;&nbsp;
                                    <label>
                                        <input type="radio" value="Tails" />
                                        Tails
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "10px"}}>
                            <button type="submit" className="btn btn-danger">Flip the coin!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );    
}