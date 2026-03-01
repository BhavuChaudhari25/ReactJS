import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting recap', details: 'Follow up with design team about the new dashboard mockups.', time: '2m ago' },
    { id: 2, title: 'Buy groceries', details: 'Milk, eggs, sourdough, olive oil.', time: '1h ago' },
    { id: 3, title: 'Read later', details: 'Finish the article on systems thinking and feedback loops.', time: '3h ago' },
  ])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      details: details.trim(),
      time: 'just now',
    }

    setNotes(prev => [newNote, ...prev])
    setTitle('')
    setDetails('')
  }

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  return (
    <div className="app">

      {/* ---- Left: Form ---- */}
      <div className="panel-left">
        <div>
          <div className="panel-header">
            <p className="panel-tag">Quick Capture</p>
            <h1 className="panel-title">
              Add<br /><span className="highlight">Notes.</span>
            </h1>
          </div>

          <form className="note-form" onSubmit={submitHandler}>
            <div className="input-wrap">
              <label className="input-label">Title</label>
              <input
                className="field"
                type="text"
                placeholder="Give your note a title…"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={80}
              />
            </div>

            <div className="input-wrap">
              <label className="input-label">Details</label>
              <textarea
                className="field field-textarea"
                placeholder="What's on your mind?"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <div className="input-wrap">
              <button type="submit" className="btn-submit">
                <span>Add Note</span>
                <span>↗</span>
              </button>
            </div>
          </form>
        </div>

        <div className="panel-footer">
          <span className="panel-footer-text">{notes.length} note{notes.length !== 1 ? 's' : ''} saved</span>
        </div>
      </div>

      {/* ---- Right: Notes ---- */}
      <div className="panel-right">
        <div className="panel-right-header">
          <span className="panel-right-title">Recent Notes</span>
          <span className="note-count">{notes.length}</span>
        </div>

        <div className="notes-grid">
          {notes.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">📋</span>
              <span className="empty-text">No notes yet</span>
            </div>
          ) : (
            notes.map((note, i) => (
              <div
                className="note-card"
                key={note.id}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="note-card-title">{note.title}</span>
                {note.details && (
                  <span className="note-card-body">{note.details}</span>
                )}
                <div className="note-card-footer">
                  <span className="note-card-time">{note.time}</span>
                  <button
                    className="note-card-delete"
                    onClick={() => deleteNote(note.id)}
                    title="Delete note"
                  >✕</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  )
}

export default App