import React from 'react'
import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {

  function handleClick(){
    console.log("handled the click");
  }
  return (
    <Container >
      <Typography 
      variant='h6'  
      paragraph>
        Create a note
      </Typography>

      <Button type='submit' 
      color='primary'  
      variant='contained' 
      onClick={handleClick}
      endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>

    </Container>
  )
}
