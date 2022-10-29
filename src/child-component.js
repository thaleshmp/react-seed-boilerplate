import React, { useEffect } from 'react';

export default (props) => {
    useEffect(() => {
        console.log('REFRESH')
    }, [props.project])
    return (
        <div>
            <h1>{props.project}</h1>
            <h1>{props.name}</h1>
        </div>
    )
}