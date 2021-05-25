import React from 'react'
import ReactLoading from 'react-loading'

export default function Loading({
  type = 'spin',
  color = '#4144AA',
  height = 50,
  width = 50
}) {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  )
}
