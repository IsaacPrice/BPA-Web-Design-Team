import React from "react";
import { AppBar, Box, Button, ButtonGroup, IconButton, Link } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Menu } from "@mui/icons-material";


export const NavBar: React.FC =() =>
{
    const navigate: NavigateFunction = useNavigate();
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);


    return (
        <AppBar position="static" sx={{ transition: ".3s all ease-in-out", height: isExpanded ? "200px" : "50px"  }}>
            
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                gap: '25px', 
                flexDirection: 'row', 
                padding: '5px' }}
            >
                <Link 
                    onClick={() => navigate('/')} 
                    color="#fff" 
                    sx={{ 
                        fontWeight: '700', 
                        fontSize: "1.5rem", 
                        textDecoration: 'none', 
                        cursor: "pointer" 
                        }}>
                            Stage Fright
                </Link>
                
                {isMobile ? 
                    <IconButton
                        onClick={() => setIsExpanded(!isExpanded)}
                        sx={{ color: '#fff', textShadow: "1px 1px 10px black"}}
                    >
                        <Menu />
                    </IconButton>
                : 
                    <ButtonGroup variant="text" color="inherit" >
                        <Button onClick={() => navigate('/about')} sx={{ textShadow: "1px 1px 10px black"}}>About</Button>
                        <Button onClick={() => navigate('/tours')} sx={{ textShadow: "1px 1px 10px black"}}>Tours</Button>
                        <Button onClick={() => navigate('/merch')} sx={{ textShadow: "1px 1px 10px black"}}>Merch</Button>
                        <Button onClick={() => navigate('/contact')} sx={{ textShadow: "1px 1px 10px black"}} >Contact</Button>
                    </ButtonGroup>
                }
            </Box>

            {isExpanded &&
                <ButtonGroup variant="text" color="inherit" orientation="vertical" fullWidth sx={{ overflowY: "hidden" }}>
                    <Button onClick={() => navigate('/about')} sx={{ textShadow: "1px 1px 10px black"}}>About</Button>
                    <Button onClick={() => navigate('/tours')} sx={{ textShadow: "1px 1px 10px black"}}>Tours</Button>
                    <Button onClick={() => navigate('/merch')} sx={{ textShadow: "1px 1px 10px black"}}>Merch</Button>
                    <Button onClick={() => navigate('/contact')} sx={{ textShadow: "1px 1px 10px black"}} >Contact</Button>
                </ButtonGroup>
            }
        </AppBar>
    )
}
