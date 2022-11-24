import React from 'react'
import { Typography, Stack } from '@mui/material'
import Icon from '../../assets/icons/gym.png'

const BodyPart = ({item , bodyPart , setbodyPart}) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={
                {
                    borderTop: bodyPart === item ? '10px solid #ff2625' : '',
<<<<<<< HEAD
                    
=======
>>>>>>> bd6c28d82d433c7f879fd6e379e56b3c7697aadb
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px',
                    borderRadius: '20px',
                }
            }
            onClick={() => {
                setbodyPart(item);
                window.scrollTo({top:1800, left: 100 ,behavior: 'smooth'});
            } }
        >
            <img src={Icon} alt='dumbbell' style={{ width: '40px', height: '40px' }} />
            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#3A1212'
            textTransform='Capitalize'>
                {item}
            </Typography>
        </Stack>
    )
};

export default BodyPart;
