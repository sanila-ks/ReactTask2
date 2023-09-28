import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0391a7'
        },
    },
});

export default function Header() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Stack
                    className="header-containerStack"
                    sx={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <h2>Dashboard</h2>
                    <div className="header-buttons" >
                        <Button variant="contained" size="small" color="primary" sx={{ width: '15vw', color: 'white', fontSize: '12px' }}>Quick Connect</Button>
                        <Button variant="contained" size="small" color="primary" sx={{ width: '15vw', color: 'white', fontSize: '12px' }}>Existing Connection</Button>
                    </div>
                </Stack>
            </ThemeProvider>
        </>
    )
}