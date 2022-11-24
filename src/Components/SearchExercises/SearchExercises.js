import React ,{useState ,useEffect} from 'react'
import { Box, Typography, Stack, Button, TextField } from '@mui/material'
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar'
import {FetchData ,ExerciseOptions} from '../../Utils/FetchData'


const SearchExercises = ({bodyPart,setbodyPart,setExercises}) => {

    const [search, setsearch] = useState('');
    const [bodyParts, setbodyParts] = useState([]);

    //setBodyParts(['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'])

    useEffect(() => {
        const fetchExercises = async () => {
            const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExerciseOptions);

            setbodyParts(['all', ...bodyPartsData]);
            //console.log(bodyPartsData);
        }
        fetchExercises();
    }, []);

    const hanleSearch = async () => {
        if (search) {
            const exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions);

            //console.log(exercisesData);
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search)
            );
            setsearch('');
            setExercises(searchedExercises)
            //console.log(searchedExercises);
        }
        
    }

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography
                fontStyle={700}
                sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign='center' >
                Awesome Exercises You <br /> 
                Slould Know
            </Typography>
            <Box position='relative' mb='72px' >
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '1000px', xs: '350px' },
                        backgroundColor: '#fff', borderRadius: '40px' 
                    }}
                    height='76px'
                    value={search}
                    placeholder='Search Exercises'
                    type='text'
                    onChange={(e) => setsearch(e.target.value.toLowerCase())} />
                <Button className='search-btn' 
                    onClick={hanleSearch}
                    sx={{
                        bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width:{lg:'175px',xs:'80px'}, fontSize:{lg:'20px',xs:'14px'},height:'56px' ,position:'absolute' ,right:'0'}} >
                    Search
                </Button>
            </Box>


            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

                
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} />
                
            </Box>

        </Stack>
    )
};

export default SearchExercises