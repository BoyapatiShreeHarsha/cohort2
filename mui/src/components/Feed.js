import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

export default function Feed() {
  return (
    <Box sx={{
        // backgroundColor:"skyblue",
    flexBasis:0,
    flexGrow:4}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}
