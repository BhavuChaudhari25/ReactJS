import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks, ${form.name}! I'll get back to you soon.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="page">
      <div className="contact-header">
        <h1>Let's talk</h1>
        <p>Have a project in mind? Send me a message and I'll get back to you.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">Send message →</button>
      </form>
    </div>
  )
}

export default Contact