import React from "react";
import { AppBar, Button, ButtonGroup, Link, Typography } from "@mui/material";
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

            <Link href="/" color="textPrimary" sx={{ fontWeight: '700', fontSize: "1.5rem", textDecoration: 'none' }}>Stage Fright</Link>

            <ButtonGroup variant="text" color="inherit">
                <Button onClick={() => navigate('/about')}>About</Button>
                <Button onClick={() => navigate('/tours')}>Tours</Button>
                <Button onClick={() => navigate('/merch')}>Merch</Button>
                <Button onClick={() => navigate('/contact')}>Contact</Button>
            </ButtonGroup>
        </AppBar>
    )
}