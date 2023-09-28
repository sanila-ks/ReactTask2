import { Button, ThemeProvider, Typography, colors, createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: '#0391a7'
        },
    },
});

let DataSet = Array(15).fill({
    user: 'Name',
    protocol: 'sftp',
    ip: '183.123.235.44',
    last_operation: 'Read',
    date_time: '06-02-2023 10:09pm',
    login_time: '10:09pm'
})

export default function DataGridDisplay() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='grid-container'>
                    <div className="grid-content">
                        <Typography variant="subtitle" sx={{ paddingLeft: '7px', fontWeight: 'bold' }}>Active Session</Typography>
                        <Button size="small" variant="outlined" color="primary"
                            sx={{ marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>Terminate All Session</Button>
                    </div>
                    <div className="table-container" >
                        <table className="table-style">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Protocol</th>
                                    <th>Remote IP Address</th>
                                    <th>Last Operation</th>
                                    <th>Date and Time</th>
                                    <th>Login Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DataSet.map(item => {
                                    return <tr>
                                        <td>{item.user}</td>
                                        <td>{item.protocol}</td>
                                        <td>{item.ip}</td>
                                        <td>{item.last_operation}</td>
                                        <td>{item.date_time}</td>
                                        <td>{item.login_time}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}