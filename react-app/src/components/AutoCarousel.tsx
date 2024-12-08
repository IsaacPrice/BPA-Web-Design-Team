import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';


type AutoCarouselProps =
{
    children?: React.ReactNode[];
    [key: string]: any;
}


export const AutoCarousel: React.FC<AutoCarouselProps> = (props: AutoCarouselProps) =>
{
    const [index, setIndex] = useState<number>(0);
    const intervalRef = useRef<number | undefined>(undefined);


    useEffect(() =>
    {
        return () =>
        {
            stopAutoScroll();
        }
    }, []);


    const onScrollLeft = (): void =>
    {
        setIndex((prevIndex: number) => (prevIndex > 0 ? prevIndex - 1 : (props.children ? props.children.length - 1 : 0)));
    }

    const onScrollRight = (): void =>
    {
        setIndex((prevIndex: number) => (props.children && prevIndex < props.children.length - 1 ? prevIndex + 1 : 0));
    }


    const startAutoScroll = (): void => 
    {
        if (intervalRef.current !== undefined) 
        {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = window.setInterval(() => 
        {
            setIndex((prevIndex) => (props.children && prevIndex < props.children.length - 1 ? prevIndex + 1 : 0));
        }, 1500); 
    };

    const stopAutoScroll = (): void => 
    {
        if (intervalRef.current !== undefined) 
        {
            clearInterval(intervalRef.current);
            intervalRef.current = undefined;
        }
    };


    return (
        <Box 
            {...props}
            onMouseEnter={startAutoScroll}
            onMouseLeave={stopAutoScroll}
            >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: '100%',
                    position: 'relative'
                }}>
                    <Box sx={{ 
                        display: 'flex', 
                        transition: 'transform 0.2s ease-in-out', 
                        transform: `translateX(-${index * 100}%)`
                        }}>
                        {
                            props.children && props.children.map((child, idx) => (
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
                </Box>
            </Box>
        </Box>
    )
}
