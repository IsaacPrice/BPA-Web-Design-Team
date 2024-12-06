import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';


type CarouselProps =
{
    children?: React.ReactNode[];
}


export const Carousel: React.FC<CarouselProps> = (props: CarouselProps) =>
{
    const [index, setIndex] = useState<number>(0);


    const onScrollLeft = (): void =>
    {
        setIndex((prevIndex: number) => (prevIndex > 0 ? prevIndex - 1 : (props.children ? props.children.length - 1 : 0)));
    }

    const onScrollRight = (): void =>
    {
        setIndex((prevIndex: number) => (props.children && prevIndex < props.children.length - 1 ? prevIndex + 1 : 0));
    }


    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={onScrollLeft}><ChevronLeftIcon /></IconButton>

                <Box sx={{ 
                    display: 'flex', 
                    transition: 'transform 0.2s ease-in-out', 
                    transform: `translateX(-${index * 100}%)`
                    }}>
                    {props.children && props.children.map((child, idx) => (
                        <Box key={idx} sx={{ 
                            minWidth: '100%', 
                            boxSizing: 'border-box', 
                            opacity: index === idx ? 1 : 0 ,
                            transition: 'opacity .2s ease-in-out'
                            }}>
                            {child}
                        </Box>
                    ))}
                </Box>

                <IconButton onClick={onScrollRight}><ChevronRightIcon /></IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {
                    props.children && props.children.map((_, idx) => (
                        <IconButton 
                            onClick={() => setIndex(idx)} 
                            sx={{ color: index === idx ? "black" : "gray" }}    
                            size="small"
                            >
                            <CircleIcon />
                        </IconButton>
                    ))
                }
            </Box>
        </Box>
    )
}
