import React from "react";
import '../../dist-styles/home.css'

const MainSection: React.FC<{children:any}> = (props) => {
    return (
        <main className='main-section-container'>
            {props.children}
        </main>
    )
}

export default MainSection; 