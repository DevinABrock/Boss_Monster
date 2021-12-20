
import React from 'react'
import Header from './Header'

function BaseLayout({children}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default BaseLayout
