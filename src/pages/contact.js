import React, { useState } from "react"
import Head from "../components/head"
import Layout from "../components/layout"

import formStyle from "./contact.module.css"

const ContactPage = () => {
  const [status, setStatus] = useState(false)
  return (
    <Layout>
      <Head title="contact" />
      <h1>contact</h1>
      <p className={formStyle.description}>
        enter text below for order inquiries or other general commentary
      </p>
      <form
        action="https://getform.io/f/d20456f5-0b0d-421c-8685-5c4a8407b7c4"
        method="POST"
        onSubmit={() => setStatus(true)}
        className={formStyle.form}
      >
        <label>Email:</label>
        <input type="email" name="email" placeholder="youremail@website.com" />
        <label>Message:</label>
        <textarea
          type="text"
          name="message"
          className={formStyle.messageBox}
          placeholder="wow! love your work and i want to hire you"
        />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className={formStyle.submit}>Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </Layout>
  )
}

export default ContactPage
