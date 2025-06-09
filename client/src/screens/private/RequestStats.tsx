import { Card, Box, Grid } from "@mui/material";
import { TopBar } from "../../components/TopBar";
import { AgentButton } from "../../components/AgentButton";
import {
    Bar,
    Line,
    Pie,
    Doughnut,
} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
);

export const RequestStats = () => {
    // Exemples de données
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
            {
                label: "Requêtes",
                data: [120, 150, 90, 180],
                backgroundColor: "#1976d2",
            },
        ],
    };

    const lineData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Tendances",
                data: [30, 80, 40, 70],
                borderColor: "#388e3c",
                backgroundColor: "#a5d6a7",
                fill: true,
            },
        ],
    };

    const pieData = {
        labels: ["Validées", "Rejetées", "En attente"],
        datasets: [
            {
                label: "Statut",
                data: [200, 100, 50],
                backgroundColor: ["#66bb6a", "#ef5350", "#ffa726"],
            },
        ],
    };

    const doughnutData = {
        labels: ["Type A", "Type B", "Type C"],
        datasets: [
            {
                label: "Types",
                data: [100, 75, 125],
                backgroundColor: ["#42a5f5", "#ab47bc", "#ffca28"],
            },
        ],
    };

    return (
        <>
            <TopBar />
            <Box sx={{ marginTop: "80px", padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5.5}>
                        <Card sx={{ p: 2 }}>
                            <Bar data={barData} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={5.5}>
                        <Card sx={{ p: 2 }}>
                            <Line data={lineData} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5.5}>
                        <Card sx={{ p: 2 }}>
                            <Pie data={pieData} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={5.5}>
                        <Card sx={{ p: 2 }}>
                            <Doughnut data={doughnutData} />
                        </Card>
                    </Grid>
                </Grid>
                <AgentButton />
            </Box>
        </>
    );
};
