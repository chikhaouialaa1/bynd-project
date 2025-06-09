import * as React from 'react';
import { Tabs, Tab, Box, Grid, Card, Typography } from "@mui/material";
import { BLUE } from '../constants/colors';
import { CoiITabInfo } from './Tabs/CoiIInfoTab'
import { ManagerInformationTab } from './Tabs/ManagerInformationTab'
import { ShareHolderInformationTab } from './Tabs/ShareHolderInformationTab'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const RequestInfoTabs = (props: any) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const DisplayTabInfo = ({ index }: { index: any }) => {
        console.log('index > ', index)


        // LOAD IT FROM THE API
        const CoiPayload = {
            DateOfIssue: '2024-01-01',
            source: 'Registry',
            companyStatus: 'Active',
            CompanyType: 'LLC',
            LegalNameAsRegistration: 'ABC Corp',
            RegistrationNumber: '12345678',
            legalAddress: '123 Street',
            legalAddressInKiwis: '456 Kiwi Ave'
        }

        const basicInfo = {
            "Date of issue": "11/11/2025",
            "source": "Ala data",
            "Company status": "OK",
            "info1": "11/11/2025",
            "info2": "Ala data",
            "info13": "OK"

        }

        const ManagerInfoData = {
            dataArray1: {
                title: "Manager 1",
                columns: [
                    { field: 'field', headerName: 'Field', flex: 1 },
                    { field: 'publicSource', headerName: 'Data from Public Source', flex: 1 },
                    { field: 'kycSystem', headerName: 'KYC System', flex: 1 },
                    { field: 'tab', headerName: 'Tab', flex: 1 },
                    { field: 'section', headerName: 'Section', flex: 1 },
                    { field: 'label', headerName: 'Label', flex: 1 },
                ],
                rows: [
                    { id: 1, field: 'Name', publicSource: 'Name', kycSystem: 'NPR', tab: 'Identity tab', section: '"Manager" title', label: 'Name' },
                    { id: 2, field: 'NP ID', publicSource: 'NA', kycSystem: 'NPR', tab: 'Identity tab', section: '"Manager" title', label: 'NP ID' },
                    { id: 3, field: 'Date of Birth', publicSource: 'Date of Birth', kycSystem: 'NPR', tab: 'Identity tab', section: '"Manager" title', label: 'Date of birth' },
                ]

            },
            dataArray2: {
                title: "Manager 2",
                columns: [
                    { field: 'field', headerName: 'Field', flex: 1 },
                    { field: 'publicSource', headerName: 'Data from Public Source', flex: 1 },
                    { field: 'kycSystem', headerName: 'KYC System', flex: 1 },
                    { field: 'tab', headerName: 'Tab', flex: 1 },
                    { field: 'section', headerName: 'Section', flex: 1 },
                    { field: 'label', headerName: 'Label', flex: 1 },
                ],
                rows: [
                    { id: 1, field: 'Array2-2Name', publicSource: 'Araay-Name', kycSystem: 'Array2-NPR', tab: 'Array2-Identity tab', section: 'Array2-Manager" title', label: 'Array2-Name' },
                    { id: 2, field: 'Array2-NP ID', publicSource: 'Araay-NA', kycSystem: 'Array2-NPR', tab: 'Array2-Identity tab', section: 'Array2-Manager" title', label: 'Array2-NP ID' },
                    { id: 3, field: 'Array2-Date of Birth', publicSource: 'Array2--Date of Birth', kycSystem: 'Array2-NPR', tab: 'Array2-Identity tab', section: 'Array2-Manager" title', label: 'Array2-Date of birth' },
                ]
            },
            dataArray3: {
                title: "Manager 3",
                columns: [
                    { field: 'test', headerName: 'Field' },
                    { field: 'publicSource', headerName: 'Data from Public Source' },
                    { field: 'kycSystem', headerName: 'KYC System' },
                    { field: 'tab', headerName: 'Tab' },
                    { field: 'section', headerName: 'Section' },
                    { field: 'label', headerName: 'Label' },
                ],
                rows: [
                    { id: 1, field: 'Array2-2Name', publicSource: 'Araay-Name', kycSystem: 'Array2-NPR', tab: 'Array2-Identity tab', section: 'Array2-Manager" title', label: 'Array2-Name' },
                    { id: 2, field: 'Array2-NP ID', publicSource: 'Araay-NA', kycSystem: 'Array2-NPR', tab: 'Array2-Identity tab', section: 'Array2-Manager" title', label: 'Array2-NP ID' },
                    { id: 3, field: 'Array2-Date of Birth', publicSource: 'Array2--Date of Birth', kycSystem: 'Array2-NPR', tab: 'Array2-Identity tab', section: 'Array2-Manager" title', label: 'Array2-Date of birth' },
                ]
            }

        }

        const SahreHolderData = {
            dataArray1: {
                title: "SahreHolderName 1 ",
                columns: [
                    { field: 'field', headerName: 'Field', flex: 1 },
                    { field: 'publicSource', headerName: 'Data from Public Source', flex: 1 },
                    { field: 'kycSystem', headerName: 'KYC System', flex: 1 },
                    { field: 'tab', headerName: 'Tab', flex: 1 },
                    { field: 'section', headerName: 'Section', flex: 1 },
                    { field: 'label', headerName: 'Label', flex: 1 },
                ],
                rows: [
                    { id: 1, field: 'SahreHoldeName', publicSource: 'SahreHoldeName', kycSystem: 'SahreHoldeNPR', tab: 'SahreHoldeIdentity tab', section: 'SahreHolde"Manager" title', label: 'SahreHoldeName' },
                    { id: 2, field: 'SahreHoldeNP ID', publicSource: 'SahreHoldeNA', kycSystem: 'SahreHoldeNPR', tab: 'SahreHoldeIdentity tab', section: 'SahreHolde"Manager" title', label: 'SahreHoldeNP ID' }
                ]
            },
            dataArray2: {
                title: "SahreHolderName 2 ",
                columns: [
                    { field: 'field', headerName: 'Field', flex: 1 },
                    { field: 'publicSource', headerName: 'Data from Public Source', flex: 1 },
                    { field: 'kycSystem', headerName: 'KYC System', flex: 1 },
                    { field: 'tab', headerName: 'Tab', flex: 1 },
                    { field: 'section', headerName: 'Section', flex: 1 },
                    { field: 'label', headerName: 'Label', flex: 1 },
                ],
                rows: [
                    { id: 1, field: 'SahreHoldeName', publicSource: 'SahreHoldeName', kycSystem: 'SahreHoldeNPR', tab: 'SahreHoldeIdentity tab', section: 'SahreHolde"Manager" title', label: 'SahreHoldeName' },
                    { id: 2, field: 'SahreHoldeNP ID', publicSource: 'SahreHoldeNA', kycSystem: 'SahreHoldeNPR', tab: 'SahreHoldeIdentity tab', section: 'SahreHolde"Manager" title', label: 'SahreHoldeNP ID' }
                ]
            }
        }


        switch (index) {
            case 0:
                return <CoiITabInfo data={CoiPayload} />;
            case 1:
                return <ManagerInformationTab basicInfo={basicInfo} data={ManagerInfoData} />;
            case 2:
                return <ShareHolderInformationTab data={SahreHolderData} />
        }

        return (
            <>
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
                                CONTRY OF INTERPORATION:
                            </Typography>
                            <Typography variant="subtitle1">FRANCE</Typography>
                        </Box>
                    </Grid>
                </Grid>

            </>
        )
    };

    const CustomTabPanel = ({ children, value, index }: TabPanelProps) => {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    };

    const a11yProps = (index: number) => ({
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    });

    return (
        <Card>
            <Box sx={{ m: 2 }}>
                <Typography sx={{ color: BLUE }} variant="h5" gutterBottom>
                    KYC Extraction
                </Typography>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Request Info Tabs">
                        <Tab label="COI" {...a11yProps(0)} />
                        <Tab label="Managers information" {...a11yProps(1)} />
                        <Tab label="Shareholder information" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Typography variant="body1">COI</Typography>
                    <DisplayTabInfo index={0} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography variant="body1">Managers information</Typography>
                    <DisplayTabInfo index={1} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography variant="body1">Shareholder information</Typography>
                    <DisplayTabInfo index={2} />
                </CustomTabPanel>
            </Box>
        </Card>
    );
};
