import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Stack, Button } from '@mui/material'

const SearchExercises = () => {
  return (
    <>
      <Stack justifyContent={'center'} mt="37px" alignItem="center" p="20px">
        <Typography fontWeight={700} sx={{
          fontSize:{lg:'44px' , xs:'30px'}
        }} mb="50px" textAlign={"center"}>
          AweSome Exercise You <br/> Should Know.
                </Typography>
                <Box position="relative" mb="72px">
                  <TextField
                  height="76px"
                  placeholder='Search Exercise'
                  value=""
                  type="text"
                  onChange={(e)=>{}}
                  />

                </Box>
      </Stack>
    </>
  )
}

export default SearchExercises