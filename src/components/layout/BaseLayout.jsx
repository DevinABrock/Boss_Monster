
import React from 'react'
import Header from './Header'

function BaseLayout({children}) {
    return (
        <>
            <Header />

            <br />

            {children}
        </>
    )
}

export default BaseLayout
