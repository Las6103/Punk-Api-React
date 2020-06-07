import React from 'react'
import Menu from "./Navbar.js";
import { Route, Link } from "react-router-dom";

function Page(props) {
    const content =
    props.data.find(data => data._id === props.match.params.id) || {};
    console.log(content);
    return (
        <div>
            <Menu />
        </div>
    )
}

export default Page
