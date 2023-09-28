import { Box, Typography } from "@mui/material";

export default function ActionStatusBlock(props) {
    return (
        <>
            <Box width={'22vw'} display="flex" justifyContent='space-between' alignItems="center"
                sx={{
                    border: '1px solid grey',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Typography variant="body1" sx={{ paddingLeft: '7px' }}>{props.text}</Typography>
                <Box
                    width={'4vw'}
                    height={40}
                    bgcolor='#1d4e82'
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                    }}
                >
                    <Typography variant="h5" color="white">
                        {props.number}
                    </Typography>
                </Box>
            </Box >
        </>
    )
}