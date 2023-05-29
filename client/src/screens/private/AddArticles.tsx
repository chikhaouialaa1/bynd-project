import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, TextField, Grid, Box, Alert, Typography } from "@mui/material";
import * as API from "../../api/admin.articles";
import { LoadingButton } from '@mui/lab';
import { TopBar } from "../../components/TopBar";



export const AddArticles = () => {
    const navigate = useNavigate()
    const [article, setArticle] = useState({
        name: "",
        description: "",
        author: "",
    });

    const [invalidInputs, setInvalidInputs] = useState(false)
    const [buttonLoading, setbuttonLoading] = useState(false)
    const [created, setCreated] = useState(false)


    const handleInputChange = (e: any) => {
        setInvalidInputs(false)
        onChangeParam(e.target.name, e.target.value);
    };

    const handleButtonClick = async () => {
        setbuttonLoading(true)
        API.create(article).then((res) => {
            setCreated(true)
        }).catch((err) => {
            setInvalidInputs(true)
            console.log('err', err)
        }).finally(() => {
            setbuttonLoading(false)
        })
    };

    const onChangeParam = (key: string, value: string) => {
        setArticle({ ...article, [key]: value });
    };

    return (
        <>
            <TopBar />
            <Box
                sx={{
                    marginTop: 10
                }}
            >
                <Typography variant="h4" component="h4" > New Article</Typography>
                <Card
                >
                    <Grid
                        sx={{
                            width: '90%',
                            padding: 5
                        }}
                        container spacing={3}>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}

                                error={invalidInputs}
                                name="name"
                                type="text"
                                onChange={(e) => handleInputChange(e)}
                                label="Name"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                error={invalidInputs}
                                name="author"
                                type="text"
                                onChange={(e) => handleInputChange(e)}
                                label="Author"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}

                                error={invalidInputs}
                                name="description"
                                placeholder="article description ..."
                                onChange={(e) => handleInputChange(e)}
                                multiline
                                rows={2}
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <LoadingButton
                                loading={buttonLoading}
                                onClick={handleButtonClick}
                                variant="outlined">
                                Create
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            {
                created &&
                <Alert
                    sx={{
                        margin: 20
                    }} severity="success">Article created successfully</Alert>
            }
        </>
    );
};
