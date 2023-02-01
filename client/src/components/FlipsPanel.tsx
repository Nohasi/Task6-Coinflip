import React from "react";
import flipsPanelTypes from "../prop_types/flipsPanelTypes";
import { ErrorMessage } from "./ErrorMessage";
import { FlipsTable } from "./FlipsTable";

export const FlipsPanel = (props: flipsPanelTypes) => {
    return(
        <div className="container">
            { props.errorStatus
              ? <ErrorMessage errorMessage={props.errorMessage} />
              : <FlipsTable rounds={props.rounds} />
            }
        </div>
    );
}