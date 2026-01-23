import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back home
      </Link>
    </div>
  )
}

export default ErrorPage
