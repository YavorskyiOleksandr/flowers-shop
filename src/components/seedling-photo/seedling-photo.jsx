import React from "react";
import './seedling-photo.css';

export const SeedlingPhoto = ({ image }) => {
    return (
        <div className="seedling-photo" style={{ backgroundImage: `url(${image})` }} />
    )
}
