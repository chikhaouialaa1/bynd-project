import { Card, Box, Grid } from "@mui/material";
import { TopBar } from "../components/TopBar";
import { AdminArticleListing } from "../components/AdminArticleListing";

export const Home = () => {
    return (
        <>
            <TopBar />
            <Box
                sx={{
                    marginTop: 10
                }}
            >
                <Card
                >
                    <AdminArticleListing />
                </Card>
            </Box>
        </>
    );
};
