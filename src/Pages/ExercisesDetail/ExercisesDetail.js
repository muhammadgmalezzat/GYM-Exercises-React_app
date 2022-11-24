import React, {useEffect, useState, } from 'react'
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import {FetchData ,ExerciseOptions,youtubeOptions} from '../../Utils/FetchData'
//import SimilarExercises from '../../Components/SimilarExercises/SimilarExercises'
import ExerciseVideos from '../../Components/ExerciseVideos/ExerciseVideos'
import Details from '../../Components/Details/Details'



const ExercisesDetail = () => {

    const [exerciseDetail, setexerciseDetail] = useState({})
    const [exerciseVideos, setexerciseVideos] = useState([])
    //const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    //const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
            
            const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, ExerciseOptions);
            setexerciseDetail(exerciseDetailData);

            const exerciseVideosData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setexerciseVideos(exerciseVideosData.contents);

            //const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, ExerciseOptions);
            //setTargetMuscleExercises(targetMuscleExercisesData);

            // const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, ExerciseOptions);
            // setTargetMuscleExercises(targetMuscleExercisesData);


            // const equipmentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, ExerciseOptions);
            // setEquipmentExercises(equipmentExercisesData);
            //console.log(equipmentExercisesData)
            //console.log(targetMuscleExercisesData)
        }
        fetchExerciseData();
        
        
    }, [id]);
    
    return (
        <Box>
            <Details exerciseDetail={ exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={ exerciseDetail.name}/>
            {/* <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises }/> */}
        </Box>
    )
};

export default ExercisesDetail