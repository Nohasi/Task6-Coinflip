import React from "react";
import roundTypes from "../prop_types/roundTypes";

export const FlipsTable = ({rounds}: {rounds:roundTypes[]}) => {
    return (
        <div className="container">
        <h2>Results:</h2>
        <table className="table table-bordered table-fixed table-sm same-col-widths">
            <thead>
                {/* Styling to make all columns the same width */}
            <tr className="same-col-widths">
                <th>Round No.</th>
                <th>Target</th>
                <th>Side Flipped</th>
                <th>Result</th>    
            </tr>
            </thead>
            <tbody>
                {rounds.map((val, key) => {
                    return(
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.target}</td>
                            <td>{val.sideFlipped}</td>
                            <td>{val.result?'Win':'Lose'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    );
}