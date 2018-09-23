import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';
import { Helmet } from "react-helmet";


function PageNotFound() {
    return (
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 NOT FOUND!</title>
            </Helmet>
            <div className="not_found_container">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <div>Oops! Page Not Found.</div>
            </div>
        </div>
    )
}

export default PageNotFound
