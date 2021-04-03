
import {Container, Typography, Box, Button} from '@material-ui/core';
import Link from 'next/link';

export default function index() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    NextJS Example By Ravi Sanapala
                </Typography>
             <Link href="/">
                 <Button variant="contained" color="primary">
                     Go to the Home Page
                 </Button>
             </Link>
            </Box>
        </Container>
    )
}


