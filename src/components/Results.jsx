import React from "react";
import { UserContext } from './UserContext';
import { useContext } from "react";

export default function Results({ element, dog }) {
    const { name } = useContext(UserContext);

    return (
        <div>
        <p>
            <strong>{ name }</strong>, your element is: { element }
        </p>
        {dog ? (
            <div className="artwork">
            <h2>Dog Information</h2>
            <img src={ dog.message } alt={ dog.name } />
            <p>{ dog.name }</p>
            </div>
        ) : (
            <p>No dog image found.</p>
        )}
        </div>
    );
}