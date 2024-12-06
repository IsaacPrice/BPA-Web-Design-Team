import React from "react";
import { AppBar, Button, ButtonGroup } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";


export const NavBar: React.FC =() =>
{
    const navigate: NavigateFunction = useNavigate();


    return (
        <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', gap: '25px', flexDirection: 'row', padding: '5px', marginBottom: '15px' }}>
            <Button onClick={() => navigate('/')} sx={{ minWidth: '75px', minHeight: '50px', border: '1px solid white' }}>
                {/* TODO: Add small logo here */}
            </Button>

            <ButtonGroup variant="text" color="inherit">
                <Button onClick={() => navigate('/about')}>About</Button>
                <Button onClick={() => navigate('/tours')}>Tours</Button>
                <Button onClick={() => navigate('/merch')}>Merch</Button>
                <Button onClick={() => navigate('/contact')}>Contact</Button>
            </ButtonGroup>
        </AppBar>
    )
}