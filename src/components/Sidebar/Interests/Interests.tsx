import React, { FC } from 'react'

interface Props {
  interests: Developer['interests'];
}

const Interests: FC<Props> = (props) =>{
    return (
        <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
                {props.interests.map((item,index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}

export default Interests