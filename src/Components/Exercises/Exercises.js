import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack} from '@mui/material'
import {FetchData ,ExerciseOptions} from '../../Utils/FetchData'
import ExerciseCard from '../ExerciseCard/ExerciseCard'


const Exercises = ({ setExercises, bodyPart, exercises }) => {
    //console.log(exercises)
    const [currentPage, setcurrentPage] = useState(1)
    
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions)
            } else {
                exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExerciseOptions)
            }
            console.log(exercisesData)
            setExercises(exercisesData)
        }

        fetchExercisesData();
    }, [bodyPart]);
    
    const exercisesPerPage = 12
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise) 


    const paginate = (e,value) => {
        setcurrentPage(value)
        window.scrollTo({top:1450 ,behavior:'smooth'})
    }
    return (
        <Box id='exercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
            <Typography variant='h3' mb='46px' >
                Showing Results
            </Typography>
            <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
                {currentExercises.map((exercise, index) => (<ExerciseCard key={index} exercise={exercise} />))}
            </Stack>
            <Stack mt='100px' alignItems='center'>
                { exercises.length > 9 && (<Pagination 
                        color='standard'
                        shape='rounded'
                        variant="outlined"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'>
                    </Pagination>)
                }
            </Stack >
        </Box>
    ) 
};

export default Exercises