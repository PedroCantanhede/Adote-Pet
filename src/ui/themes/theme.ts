import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6C63FF',
        },
        secondary: {
            main: '#C5C5C5',
        },
        text: {
            primary: '#293845',
            secondary: '#9EADBA',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '5px',
                    fontWeight: 'normal',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        fontWeight: 'bold',
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: '1px solid #D8D8D8',
                },
            },
        },
    },
});

export default theme;