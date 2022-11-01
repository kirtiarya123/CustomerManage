import React from 'react'

export default function Footer() {
  let footerStyle={
    position:"relative",
    top:"50vh",
    width:"100%"


  }
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        copyright @copy Mytodolists.com
      </p>
       
      
    </div>
  )
}
