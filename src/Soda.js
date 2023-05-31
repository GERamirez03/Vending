import React from "react";

import { Link } from "react-router-dom";

const Soda = () => (
    <div className="Soda">
        <p>THIS IS THE SODA. COKE AND DR PEPPER ARE VERY GOOD.</p>
        <Link to="/">
            Back
        </Link>
    </div>
);

export default Soda;