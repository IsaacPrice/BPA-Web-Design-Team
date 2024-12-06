import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { useParams } from "react-router-dom";
import { Merch } from "../../types/Merch";
import { MERCH_DATA } from "../../constants/merchData";
import { Box, Paper, Typography, Link, Button, Drawer, IconButton, Dialog } from "@mui/material";
import { Carousel } from "../../components/Carousel";
import { SHIPPING_DATA } from "../../constants/shippingData";
import { Shipping } from "../../types/Shipping";
import { ReturnPolicyDialog } from "../../components/ReturnPolicy";
import FullscreenIcon from '@mui/icons-material/Fullscreen';


export const MerchItemPage: React.FC = () => 
{
    const [merchItem, setMerchItem] = useState<Merch | undefined>(undefined);
    const [isShippingOpen, setIsShippingOpen] = useState<boolean>(false);
    const [isReturnPolicyOpen, setIsReturnPolicyOpen] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const { merchName } = useParams();


    useEffect(() =>
    {
        if (merchName !== undefined)
        {
            setMerchItem(MERCH_DATA.find((merch: Merch) => merch.linkName === merchName));
        }
    }, [merchName]);


    const onOpenFullscreen = (): void =>
    {
        setIsFullscreen(true);
    }


    const onOpenShipping = (): void =>
    {
        setIsShippingOpen(true);
    }


    const onOpenReturnPolicy = (): void =>
    {
        setIsReturnPolicyOpen(true);
    }


    const onCloseFullscreen = (): void =>
    {
        setIsFullscreen(false);
    }

    
    const onCloseShipping = (): void =>
    {
        setIsShippingOpen(false);
    }


    const onCloseReturnPolicy = (): void =>
    {
        setIsReturnPolicyOpen(false);
    }


    return (
        <>
        {
            merchItem !== undefined &&
            <Grid container padding={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Box className="centerAlignedRow">
                        <Carousel>
                            {
                                merchItem!.imagePaths.map((imagePath: string) =>
                                (
                                    <Box component="img" src={imagePath} width="100%" />
                                ))
                            }
                        </Carousel>
                        <IconButton onClick={onOpenFullscreen}>
                            <FullscreenIcon />
                        </IconButton>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h3">{merchItem!.name}</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ paddingBottom: '15px' }}>{merchItem!.category}</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
                        <Typography maxWidth="500px">{merchItem!.description}</Typography>
                    </Box>

                    {
                        merchItem!.sizes &&
                        <>
                            <Typography variant="h5" marginBottom="15px">Sizes</Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'row', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '25px'
                                }}>
                                {
                                    merchItem!.sizes.map((size: string) =>
                                    {
                                        return (
                                            <Paper sx={{ padding: '10px' }}>
                                                <Typography>{size}</Typography>
                                            </Paper>   
                                        )
                                    })
                                }
                            </Box>
                        </>
                    }

                    <Box className="centerAlignedRow" marginBottom="10px">
                        <Typography><Link onClick={onOpenShipping}>Shipping</Link></Typography>
                        <Typography><Link onClick={onOpenReturnPolicy}>Return Policy</Link></Typography>
                    </Box>

                    <Box className="centerAlignedRow" marginBottom="25px">
                        <Typography variant="h4" fontWeight={700}>$ {merchItem!.price}</Typography>
                        <Button>Buy Now</Button>
                    </Box>
                </Grid>

                <Grid container size={12} spacing={3} direction="row" alignItems="center" justifyContent="center">
                    <Grid size={12}>
                        <Typography variant="h3">Other Merch</Typography>
                    </Grid>
                    {
                        MERCH_DATA
                            .filter((merch: Merch) => merch.linkName !== merchName)
                            .map((merch: Merch) =>
                        {
                            return (
                                <Grid size={{ xs: 6, sm: 4, md: 2 }}>
                                    <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px' }}>
                                        <Box component="img" src={merch.imagePaths[0]} alt={merch.name} width="100%" />

                                        <Typography variant="h4"><Link href={`/merch/${merch.linkName}`}>{merch.name}</Link></Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Typography color="textSecondary">{merch.category}</Typography>
                                            <Typography variant="h5" fontWeight={700}>$ {merch.price}</Typography>
                                        </Box>

                                        {
                                            (merch.sizes && merch.sizeAbbreviations) &&
                                            <Box sx={{ 
                                                display: 'flex', 
                                                flexDirection: 'row', 
                                                justifyContent: 'center', 
                                                alignItems: 'center', 
                                                gap: '10px',
                                                flexWrap: 'wrap'
                                                }}>
                                                {
                                                    merch.sizeAbbreviations.map((size: string) =>
                                                    {
                                                        return (
                                                            <Paper sx={{ padding: '5px' }}>
                                                                <Typography>{size.toUpperCase()}</Typography>
                                                            </Paper>   
                                                        )
                                                    })
                                                }
                                            </Box>
                                        }
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        }

        <Drawer anchor="right" open={isShippingOpen} onClose={onCloseShipping}>
            <Box padding="20px">
                <Typography variant="h4" marginBottom="15px">Shipping Options</Typography>
                {
                    SHIPPING_DATA.map((shipping: Shipping) => 
                        <Paper sx={{ padding: '15px', marginBottom: '15px' }}>
                            <Typography fontSize="700">{shipping.name}</Typography>
                            <Typography color="textSecondary">{shipping.carrier}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: "25px"}}>
                                <Typography>{shipping.deliveryTime} Business Days</Typography>
                                <Typography>$ {shipping.price}</Typography>
                            </Box>
                        </Paper>
                    )
                }
            </Box>
        </Drawer>

        {
            merchItem &&
            <Dialog open={isFullscreen} onClose={onCloseFullscreen}>
                <Box sx={{ padding: "15px", maxWidth: "1000px", overflow: 'hidden' }}>
                    <Carousel>
                        {
                            merchItem!.imagePaths.map((imagePath: string) =>
                            (
                                <Box component="img" src={imagePath} width="100%" />
                            ))
                        }
                    </Carousel>
                </Box>
            </Dialog>
        }

        <ReturnPolicyDialog open={isReturnPolicyOpen} onClose={onCloseReturnPolicy} />
        </>
    );
}