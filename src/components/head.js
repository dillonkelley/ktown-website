import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  const renderTitle = title ? `${title} | Karissa Talanian` : `Karissa Talanian`
  return (
    <Helmet title={renderTitle}>
      <meta
        name="description"
        content="Karissa Talanian portfolio and contact for macrame and art commissions"
      />
    </Helmet>
  )
}

export default Head
