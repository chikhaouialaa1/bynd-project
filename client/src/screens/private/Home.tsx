import { Card, Box, Grid } from "@mui/material";
import { TopBar } from "../../components/TopBar";
import { RequestsList } from "../../components/RequestsList";
import { AgentButton } from '../../components/AgentButton'
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
                    <RequestsList />
                </Card>
            </Box>
            <AgentButton />
        </>
    );
};
