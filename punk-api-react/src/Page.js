import React from 'react'
import { Route, Link } from "react-router-dom";

function Page(props) {
    const content =
    props.data.find(data => data._id === props.match.params.id) || {};
    console.log(content);
    return (
        <div>
            
        </div>
    )
}

export default Page
