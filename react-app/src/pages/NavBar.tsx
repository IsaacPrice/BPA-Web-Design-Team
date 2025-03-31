import React from "react";
import { AppBar, Button, ButtonGroup, Link } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";


export const NavBar: React.FC =() =>
{
    const navigate: NavigateFunction = useNavigate();


    return (
        <AppBar position="static" sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '25px', 
            flexDirection: 'row', 
            padding: '5px', 
            marginBottom: '15px' }}>

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

            <ButtonGroup variant="text" color="inherit" >
                <Button onClick={() => navigate('/about')} sx={{ textShadow: "1px 1px 10px black"}}>About</Button>
                <Button onClick={() => navigate('/tours')} sx={{ textShadow: "1px 1px 10px black"}}>Tours</Button>
                <Button onClick={() => navigate('/merch')} sx={{ textShadow: "1px 1px 10px black"}}>Merch</Button>
                <Button onClick={() => navigate('/contact')} sx={{ textShadow: "1px 1px 10px black"}} >Contact</Button>
            </ButtonGroup>
        </AppBar>
    )
}
