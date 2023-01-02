import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{p: 6}} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Created By
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                &copy; {new Date().getFullYear()} Rudakov Ilya
            </Typography>
        </Box>
    );
};

export default Footer;