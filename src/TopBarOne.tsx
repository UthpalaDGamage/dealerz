import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faPhone } from "@fortawesome/free-solid-svg-icons";
export const TopBarOne = () => {
    return (
        <>
            <div className="wrapper bar-one">
                <div className="top-left">
                    <span>Dealerz.</span>
                </div>
                <div className="top-right">
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                        Call Center
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faTruck} />
                        Shipping and returns
                    </span>
                </div>
            </div>
        </>
    );
};
