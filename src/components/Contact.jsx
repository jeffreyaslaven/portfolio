import { useState } from 'react'

const TOOLTIPS = {
  name: 'Enter your first and last name',
  email: 'I\'ll use this to reply to you',
  message: 'Min 10 characters — tell me what\'s on your mind',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState(false)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...form, [name]: value }))
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target
    const updatedForm = { ...form, [name]: value }
    setForm(updatedForm)
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(updatedForm))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const current = {
      name: data.get('name') || form.name,
      email: data.get('email') || form.email,
      message: data.get('message') || form.message,
    }
    const allTouched = { name: true, email: true, message: true }
    setTouched(allTouched)
    const errs = validate(current)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    try {
      const res = await fetch('https://formspree.io/f/mlgpkopp', {
        method: 'POST',
        body: JSON.stringify(current),
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      setSubmitError(false)
    } catch {
      setSubmitError(true)
    }
  }

  return (
    <section id="contact">
      <div className="section">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's connect.</h2>
        <p className="section-subtitle">
          Whether you have a question, an opportunity, or just want to say hi —
          my inbox is always open.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I'm open to full-time roles, freelance projects, and interesting
              collaborations. Feel free to reach out through the form or
              directly via email or LinkedIn.
            </p>

            <div className="contact-links">
              <a
                href="mailto:jeffalslavenjr@gmail.com"
                className="contact-link"
              >
                <span className="contact-link-icon">✉️</span>
                jeffalslavenjr@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/jeffrey-a-slaven-jr"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">💼</span>
                linkedin.com/in/jeffrey-a-slaven-jr
              </a>
              <a
                href="https://github.com/jeffreyaslaven"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">⌨️</span>
                github.com/jeffreyaslaven
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {['name', 'email', 'message'].map((field) => (
              <div className="form-group" key={field}>
                <label htmlFor={field} className="form-label">
                  {field === 'email' ? 'Your Email' : field.charAt(0).toUpperCase() + field.slice(1)}
                  <span className="form-tooltip" aria-label={TOOLTIPS[field]}>
                    ?
                    <span className="form-tooltip-text">{TOOLTIPS[field]}</span>
                  </span>
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched[field] && errors[field] ? 'input-error' : ''}
                  />
                ) : (
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                    value={form[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched[field] && errors[field] ? 'input-error' : ''}
                  />
                )}
                {touched[field] && errors[field] && (
                  <span className="form-error">{errors[field]}</span>
                )}
              </div>
            ))}

            {submitted && (
              <p className="form-success">
                ✓ Message sent — I'll get back to you soon!
              </p>
            )}
            {submitError && (
              <p className="form-error">
                Failed to send message. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="btn-primary"
              disabled={Object.keys(validate(form)).length > 0}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
