import React from 'react'
import { Link } from 'react-router-dom'

export default function Operadores() {
  return (
    <div>
      <h1>operadores</h1>

      <Link to={`/operadores/${213}`}>
        <div>
          <h4>Operador 213</h4>
        </div>
      </Link>

      <Link to={`/operadores/${500}`}>
        <div>
          <h4>Operador 500</h4>
        </div>
      </Link>
    </div>
  )
}
