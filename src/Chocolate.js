import React from "react";

import { Link } from "react-router-dom";

const Chocolate = () => (
    <div className="Chocolate">
        <p>THIS IS THE CHOCOLATE. MILK AND DARK CHOCOLATE ARE BOTH AMAZING.</p>
        <Link to="/">
            Back
        </Link>
    </div>
);

export default Chocolate;