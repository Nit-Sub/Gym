import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Stack, Button } from '@mui/material'

const SearchExercises = () => {
  return (
    <>
      <Stack justifyContent='center' mt="37px" alignItem="center" p="20px">
        <Typography fontWeight={700} sx={{
          fontSize:{lg:'44px' , xs:'30px'}
        }} mb="50px" textAlign="center">
          AweSome Exercise You <br/> Should Know.
                </Typography>  
                <Box position="relative" mb="72px">
                <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" variant="contained" color="error">Search</Button>

                </Box>
      </Stack>
    </>
  )
}

export default SearchExercises