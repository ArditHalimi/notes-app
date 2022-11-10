import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

const NotePage = ({ match, history }) => {
    let noteId = match.params.id
    let [note, setNote] = useState(null)
    let [token, setToken] = useState(null)

    useEffect(() => {
        let token = localStorage.getItem("token");
        setToken(token)
        getNote(token)
    }, [noteId])


    let getNote = async (token) => {
        if (noteId === 'new') return

        let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/notes/${noteId}/`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            }})
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
            body: JSON.stringify(note)
        })
    }


    let updateNote = async () => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
            body: JSON.stringify(note)
        })
    }


    let deleteNote = async () => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/notes/${noteId}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            }
        })
        window.location.href = '/'
    }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        if (noteId !== 'new' && note.body == '') {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null) {
            createNote()
        }
        window.location.href = '/'
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }
    return (
        <div className="note" >
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea className='textarea' onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
