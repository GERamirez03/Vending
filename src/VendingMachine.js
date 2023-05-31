import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => (
    <div className="VendingMachine">
        <p>THIS IS THE VENDING MACHINE. HI. TAKE A SODA, CANDY, OR CHOCOLATE.</p>
        <Link to="/soda">
            Soda
        </Link>
        <Link to="/candy">
            Candy
        </Link>
        <Link to="/chocolate">
            Chocolate
        </Link>
    </div>
);

export default VendingMachine;