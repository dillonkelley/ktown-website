import React, { useState } from "react"
import Fade from "react-reveal"
import Head from "../components/head"
import Layout from "../components/layout"

import formStyle from "./contact.module.css"

const ContactPage = () => {
  const [status, setStatus] = useState(false)
  return (
    <Layout>
      <Head title="contact" />
      <Fade duration={1000}>
        <h1>contact</h1>
        <form
          action="https://getform.io/f/d20456f5-0b0d-421c-8685-5c4a8407b7c4"
          method="POST"
          onSubmit={() => setStatus(true)}
          className={formStyle.form}
        >
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@website.com"
            required
          />
          <label htmlFor="message">message:</label>
          <textarea
            type="text"
            name="message"
            className={formStyle.messageBox}
            placeholder="for order inquiries or other general commentary"
            required
          />
          {status === "SUCCESS" ? (
            <p>thank you very much ;)</p>
          ) : (
            <button className={formStyle.submit}>submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </Fade>
    </Layout>
  )
}

export default ContactPage
