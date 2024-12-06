import { createTheme } from '@mui/material/styles';


// 008fc4 (blue), 36393b (dark gray), bfb6bb (tan-ish), c3d350 (green)

export const theme = createTheme(
{
    palette: {
        primary: {
            main: '#008fc4',
        },
        secondary: {
            main: '#c3d350',
        },
        background: {
            default: '#f5f5f5', 
        },
        text: {
            primary: '#36393b',
            secondary: '#bfb6bb',
        },
    },
    typography: {
        fontFamily: 'Century Gothic, Weezer, sans-serif',
        h1: {
            fontSize: '3rem'
        },
        body1: {
            paddingBottom: '15px'
        }
    },
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    color: 'textPrimary',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Century Gothic, sans-serif',
                    fontWeight: 700
                }
            },
            defaultProps: {
                variant: "contained",
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textAlign: 'center',
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
            },
        },
    },
});