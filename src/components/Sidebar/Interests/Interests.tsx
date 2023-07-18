import React, { useContext } from 'react'

import DeveloperContext from '../../../context/DeveloperContext';


const Interests = () => {
    const { interests } = useContext(DeveloperContext);

    return (
        <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
                {interests.map((item,index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}

export default Interests
