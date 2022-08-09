import React from 'react'
import { Container } from 'react-bootstrap';
import { Spinner } from "reactstrap";
import "../SpinnerIcon/SpinnerIcon.css"

const SpinnerIcon = () => {
  return (
    <Container className='prueba'>
      <div>
      <Spinner color="primary" className='spinners'/>
        <h3>ElBebedero.com</h3>
        
      
      </div>
      
    </Container>
  )
}

export default SpinnerIcon