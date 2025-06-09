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
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export const ShareHolderInformationTab = (props: any) => {
    const rawData = props?.data || {};
    const dataArray = Object.entries(rawData);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Shareholder information
            </Typography>
            <Stack spacing={3}>
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
