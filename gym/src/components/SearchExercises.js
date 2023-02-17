import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Stack, Button } from '@mui/material'
import { fetchData, exerciseOptions} from '../utils/fetchData';
const SearchExercises = () => {
  const [search , setSearch]= useState('');
  const handleSearch=async ()=>{
   if (search){
    const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions );
    console.log(exerciseData)
   }

  }
  
  return (
    <>
      <Stack justifyContent='center' mt="37px" alignItem="center" p="20px">
        <Typography fontWeight={700} sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }} mb="50px" textAlign="center">
          AweSome Exercise You <br /> Should Know.
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={search}

            onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}}
            
            placeholder="Search Exercises"
            type="text"
          />
          <Button className="search-btn" variant="contained"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' },
              fontSize: { lg: "20px", xs: '14px' },
              height: '56px',
              position: "absolute"
            }}
            onClick={handleSearch}
            >Search</Button>

        </Box>
      </Stack>
    </>
  )
}

export default SearchExercises