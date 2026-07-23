import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact — Hood Akram";
  }, []);
  const update = (field) => (e) => {

    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
  const validate = () => {
    const next = {};
    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      next.email = "Please enter a valid email.";
    }
    if (
      !form.message.trim() ||
      form.message.trim().length < 10
    ) {
      next.message =
        "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus("");
    try {
      await emailjs.send(
        "service_1x7g0qj",
        "template_1x7g0qj",

        {
          from_name: form.name,
          from_email: form.email,
          from_time: new Date().toLocaleString(),
          message: form.message,
        },

        "0BxNjrMlAGvGEwlkI"
      );
      setStatus(
        "Message sent successfully! I will contact you soon."
      );
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(
        "EmailJS Error:",
        error
      );
      setStatus(
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <section style={{ paddingTop: 70 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">
                contact
              </div>

              <h1>
                Let's build something.
              </h1>
              <p>
                Have a project, job opportunity, or collaboration idea?
                Feel free to send me a message.
              </p>
            </div>
          </Reveal>
          <div className="contact-grid">
            <Reveal>
              <form 
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                  />
                  {
                    errors.name &&
                    <div
                      className="form-note"
                      style={{
                        color:
                        "var(--accent-amber)"
                      }}
                    >
                      {errors.name}
                    </div>
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                  />
                  {
                    errors.email &&
                    <div
                      className="form-note"
                      style={{
                        color:
                        "var(--accent-amber)"
                      }}
                    >
                      {errors.email}
                    </div>
                  }

                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell me about the role or project..."
                  />

                  {
                    errors.message &&

                    <div
                      className="form-note"
                      style={{
                        color:
                        "var(--accent-amber)"
                      }}
                    >
                      {errors.message}
                    </div>
                  }

                </div>
                <button
                  type="submit"
                  className="btn btn-solid"
                  disabled={loading}
                >
                  {
                    loading
                    ? "Sending..."
                    : "Send message →"
                  }
                </button>

                {
                  status &&
                  <div className="form-status">
                    {status}
                  </div>
                }

                <div className="form-note">
                  Your message will be sent directly to my inbox.
                </div>
              </form>
            </Reveal>
            <Reveal delay={0.1}>

              <div className="contact-list">

                <div className="c-item">
                  <span>
                    Email
                  </span>
                  <a href="mailto:hoodakram016@gmail.com">
                    hoodakram016@gmail.com
                  </a>
                </div>

                <div className="c-item">
                  <span>
                    Phone
                  </span>
                  <b>
                    0325 3829124
                  </b>
                </div>
                <div className="c-item">
                  <span>
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/hood-akram-8877832b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /in/hoodakram
                  </a>
                </div>

                <div className="c-item">
                  <span>
                    GitHub
                  </span>
                  <a
                    href="https://github.com/hoodakram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    /hoodakram

                  </a>
                </div>

                <div className="c-item">
                  <span>
                    Location
                  </span>
                  <b>
                    Bahria Town, Lahore
                  </b>
                </div>

              </div>
            </Reveal>

          </div>

        </div>

      </section>

    </PageTransition>

  );

}