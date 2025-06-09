import { Box, Grid, Typography } from "@mui/material";


export const CoiITabInfo = (props: any) => {
    const {
        DateOfIssue,
        source,
        companyStatus,
        CompanyType,
        LegalNameAsRegistration,
        RegistrationNumber,
        legalAddress,
        legalAddressInKiwis
    } = props.data || {};

    return (
        <>
            <Grid sx={{ margin: '10px' }} container>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            DATE OF ISSUE:
                        </Typography>
                        <Typography variant="subtitle1">{DateOfIssue}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            SOURCE:
                        </Typography>
                        <Typography variant="subtitle1">{source}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            COMPANY STATUS:
                        </Typography>
                        <Typography variant="subtitle1">{companyStatus}</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid sx={{ margin: '10px' }} container>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            COMPANY TYPE:
                        </Typography>
                        <Typography variant="subtitle1">{CompanyType}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            LEGAL NAME AS REGISTRATION:
                        </Typography>
                        <Typography variant="subtitle1">{LegalNameAsRegistration}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            REGISTRATION NUMBER:
                        </Typography>
                        <Typography variant="subtitle1">{RegistrationNumber}</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid sx={{ margin: '10px' }} container>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            LEGAL ADDRESS:
                        </Typography>
                        <Typography variant="subtitle1">{legalAddress}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="subtitle1" color="text.secondary">
                            LEGAL ADDRESS IN KIWIS:
                        </Typography>
                        <Typography variant="subtitle1">{legalAddressInKiwis}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};


