import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer } from '../components'

function Layout({ children }){
    return(
        <Fragment>
            <Helmet>
                <title>Reeddi</title>
            </Helmet>
            
            <body>
                <Navbar/>
                { children }
                <Footer/>
            </body>
        </Fragment>
    )
}

export default Layout