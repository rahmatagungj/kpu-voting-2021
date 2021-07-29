import React from 'react';
import {Helmet} from "react-helmet";

function Seo({title}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title ? "Pemilihan Umum Raya - " + title : "Pemilihan Umum Raya"}</title>
        </Helmet>
    );
}

export default Seo;