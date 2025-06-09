import { Card, Box, Button, Grid, Typography } from "@mui/material";
import { BLUE } from '../../constants/colors'
import { AgentChatUrl } from '../../constants/externalUrls'
import { RequestInfoTabs } from '../../components/RequestInfoTabs'
import { AgentButton } from '../../components/AgentButton'
import { TopBar } from '../../components/TopBar'
import ChatIcon from '@mui/icons-material/Chat';
export const RequestDetails = () => {

    const onClickButton = () => {
        window.open(
            AgentChatUrl,
            '_blank',
            'noopener,noreferrer,width=1000,height=800,left=200,top=200'
        )
    }

    return (
        <>
            <TopBar></TopBar>
            <Box sx={{ marginTop: '80px' }}>
                <Box>
                    <Card
                    >
                        <Card>
                            <Box sx={{ margin: '10px' }} >
                                <Typography sx={{ color: BLUE }} variant="h5" gutterBottom>
                                    Kiwis counterparty summary
                                </Typography>
                            </Box>
                        </Card>
                        <Card >
                            <Box sx={{ margin: '10px' }} >
                                <Grid sx={{ margin: '10px' }} container >
                                    <Grid item xs={4}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                Kiwis ID:
                                            </Typography>
                                            <Typography variant="subtitle1">123456</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                ENTITY NAME:
                                            </Typography>
                                            <Typography variant="subtitle1">MYENTITY NAME</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                CONTRY OF INTERPORATION / NATIONANLITY
                                            </Typography>
                                            <Typography variant="subtitle1">FRANCE</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ margin: '10px' }} container >
                                    <Grid item xs={4}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                CATEGORY:
                                            </Typography>
                                            <Typography variant="subtitle1">123456</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                RATING:
                                            </Typography>
                                            <Typography variant="subtitle1">MYENTITY NAME</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                COUNTRY OF RESIDANCE:
                                            </Typography>
                                            <Typography variant="subtitle1">FRANCE</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Card>
                    </Card>
                    <Card>
                        <RequestInfoTabs />
                    </Card>
                </Box>
                <AgentButton />
            </Box>
        </>
    );
};
