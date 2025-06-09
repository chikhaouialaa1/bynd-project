import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { OverviewInfo } from '../Tabs/OverviewInFo'


interface SectionProps {
    title: string;
    columns: GridColDef[];
    rows: GridRowsProp;
}

const DataSection: React.FC<SectionProps> = ({ title, columns, rows }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={4}
                        rowsPerPageOptions={[5]} />
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export const ManagerInformationTab = (props: any) => {
    const rawData = props?.data || {};
    const basicInfo = props?.basicInfo || {};
    const dataArray = Object.entries(rawData); // turns { key: value } into [ [key, value], ... ]

    console.log('props - basicInfo > ', basicInfo)

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                KYC Information Overview
            </Typography>
            <Stack spacing={3}>
                <OverviewInfo basicInfo={basicInfo}></OverviewInfo>

                {
                    dataArray.map(([key, item]: [string, any], index: number) => {
                        const managerColumns: GridColDef[] = [...item?.columns];
                        const rows: GridRowsProp = [...item?.rows];
                        const title = item?.title

                        return (
                            <DataSection
                                key={index}
                                title={title}
                                columns={managerColumns}
                                rows={rows}
                            />
                        );
                    })
                }
            </Stack>
        </Box>
    );
};
