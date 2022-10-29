import React, { useEffect, useState } from 'react';
import ChildComponent from './child-component';

export default (props) => {
    const [name, setName] = useState('')
    const [project, setProject] = useState('')

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={onNameChange} />
            <ChildComponent project={project} name={name} />
        </div>

    )
}