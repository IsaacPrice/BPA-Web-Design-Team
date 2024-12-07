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
        fontFamily: 'Century Gothic, sans-serif',
        h1: {
            fontSize: '3rem'
        },
        h2: {
            fontSize: '2.5rem'
        },
        h3: {
            fontSize: '2rem'
        },
        h4: {
            fontSize: '1.66rem'
        },
        h5: {
            fontSize: '1.33rem'
        },
        h6: {
            fontSize: '1rem'
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
            },
            defaultProps: {
                color: "textPrimary",
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
            },
        },
    },
});