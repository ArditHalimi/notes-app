import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'


const AddButton = () => {
    return (
        <a href="/note/new" className="floating-button">
            <AddIcon />
        </a>
    )
}

export default AddButton
