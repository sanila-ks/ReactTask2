import { Button, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: '#0391a7'
        },
    },
});
export default function Footer() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="footer-Container">
                    <p>
                        {/* &copy;CINTAP Inc. All rights reserved */}
                        <i className="fa fa-copyright"></i>{" 2023 CINTAP Inc. All rights reserved"}
                    </p>
                    <div className="footer-right-content">
                        <i className="fa fa-headphones" aria-hidden="true"></i>
                        <i className="fa fa-volume-down" aria-hidden="true"></i>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            sx={{ fontSize: '10px', color: "white" }}>Give Feedback</Button>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}
