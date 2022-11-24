import React ,{useState} from 'react'
import Box from '@mui/material/Box';
import HeroBanner from '../../Components/HeroBanner/HeroBanner'
import SearchExercises from '../../Components/SearchExercises/SearchExercises'
import Exercises from '../../Components/Exercises/Exercises'



const Home = () => {
    
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setbodyPart] = useState('all');
    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        </Box>
    )
};

export default Home