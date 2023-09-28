import { Grid, Stack } from "@mui/material";
import BarChart from "./BarChart";
import { LineChart } from "./LineChart";

export default function ChartSection() {
    const chartContent = {
        border: "1px solid grey",
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: "10px",
        height: '35vh',
        width: '46vw',
    }
    return (
        <Grid container height={'37vh'} marginRight={"10px"}>
            <Grid item sm={6}>
                <Stack sx={chartContent}>
                    <BarChart />
                </Stack>
            </Grid>
            <Grid item sm={6} sx={{ paddingLeft: '7px' }}>
                <Stack sx={chartContent}>
                    <LineChart />
                </Stack>
            </Grid>
        </Grid>
    )
}