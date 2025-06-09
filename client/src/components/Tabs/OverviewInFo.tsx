import { Box, Card, Grid, Typography } from "@mui/material";
import { BLUE } from '../../constants/colors';

export const OverviewInfo = (props: any) => {
    const rawInfo = props?.basicInfo || {};

    const basicInfos = Object.entries(rawInfo).map(([key, value]) => ({
        title: key,
        value: value,
    }));

    return (
        basicInfos.length > 0 ? (
            <Card>
                <Grid sx={{ margin: '10px' }} container spacing={2}>
                    {basicInfos.map((item: any, index: number) => (
                        <Grid key={index} item xs={4}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <Typography sx={{ color: BLUE }} variant="subtitle1" color="text.secondary">
                                    {item.title.toUpperCase()}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.value}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Card>
        ) : null
    );
};
