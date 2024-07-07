import React from 'react'

const MainHeader = ({ children }) => {
    return (
        <header className='main-header'>
            <button>
                {children}
            </button>
        </header>
    )
}

export default MainHeader
