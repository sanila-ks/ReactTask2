import { Drawer, IconButton } from "@mui/material";

export default function SideBar() {
    const IconButtonStyle = {
        borderRadius: '0',
        width: 50,
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgb(84, 204, 255)',
            borderRadius: '5px',
        }
    }
    return (
        <>
            <Drawer
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 60,
                        backgroundColor: '#1d4e82',
                        zIndex: 1,
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <IconButton sx={IconButtonStyle} >
                    <i className="fa fa-home" aria-hidden="true"></i></IconButton>
                <IconButton sx={IconButtonStyle}>
                    <i className="fa fa-link" aria-hidden="true"></i></IconButton >
                <IconButton sx={IconButtonStyle}>
                    <i className="fa fa-file-text-o" aria-hidden="true"></i></IconButton >
            </Drawer >
        </>
    )
}
