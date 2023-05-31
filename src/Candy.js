import React from "react";

import { Link } from "react-router-dom";

const Candy = () => (
    <div className="Candy">
        <p>THIS IS THE CANDY. MMMM SUGAR.</p>
        <Link to="/">
            Back
        </Link>
    </div>
);

export default Candy;