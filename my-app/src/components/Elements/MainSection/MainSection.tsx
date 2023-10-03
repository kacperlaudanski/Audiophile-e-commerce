import { ReactNode } from 'react';
import '../../../dist-styles/main-section.css'; 

const MainSection: React.FC<{children:ReactNode}> = (props) => {
    return (
        <main className='main-section-container'>
            {props.children}
        </main>
    )
}

export default MainSection; 