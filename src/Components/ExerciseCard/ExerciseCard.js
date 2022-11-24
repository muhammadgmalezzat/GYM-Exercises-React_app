import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Stack} from '@mui/material'



const ExerciseCard = ({ exercise }) => {
    
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction='row'>
                <Button sx={{ml:'21px',color:'#fff' ,background:"#ffa9a9",fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}} >
                    {exercise.bodyPart}
                </Button>

                <Button sx={{ml:'21px',color:'#fff' ,background:"#fdd757",fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}} >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml='21px' color="#000" textTransform='capitalize' fontSize='24px'>
                {exercise.name}
            </Typography>
        </Link>
    )
};

export default ExerciseCard