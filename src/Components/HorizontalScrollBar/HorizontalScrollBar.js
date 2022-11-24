import React ,{useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from '../BodyPart/BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../../assets/icons/right-arrow.png'
import LeftArrowIcon from '../../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={()=> scrollPrev()} className='left-arrow'>
            <img src={LeftArrowIcon} alt='left-arrow' />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={()=> scrollNext()} className='right-arrow'>
            <img src={RightArrowIcon} alt='right-arrow' />
        </Typography>
    )
}


const HorizontalScrollBar = ({ data,bodyPart,setbodyPart }) => {
    //const dta = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'];

    console.log(data)
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m='0 20px'
                >
                    <BodyPart item={item} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
                </Box>) )}
        </ScrollMenu>
    )
};

export default HorizontalScrollBar;