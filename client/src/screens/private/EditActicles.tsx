import { useEffect, useState } from "react";
import { Card, TextField, Grid, Box, Alert, Typography } from "@mui/material";
import * as API from "../../api/admin.articles";
import { LoadingButton } from '@mui/lab';
import { TopBar } from "../../components/TopBar";
import { useNavigate, useParams } from 'react-router-dom';
import {
    verifyToken
} from "../../utils/auth";


export const EditActicles = () => {
    const navigate = useNavigate()
    const { _id } = useParams()
    const [article, setArticle] = useState({
        name: "",
        description: "",
        author: "",
    });

    useEffect(() => {
        if (verifyToken()) {
            // @ts-ignore
            API.get(_id).then((res) => {
                setArticle(res.data)
            })
        }
    }, [])

    const [invalidInputs, setInvalidInputs] = useState(false)
    const [buttonLoading, setbuttonLoading] = useState(false)
    const [edited, setEdited] = useState(false)


    const handleInputChange = (e: any) => {
        setInvalidInputs(false)
        onChangeParam(e.target.name, e.target.value);
    };

    const handleButtonClick = async () => {
        setbuttonLoading(true)
        const { name, description } = article
        // @ts-ignore
        API.update({ name, description }, _id).then((res) => {
            setEdited(true)
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
                <Card
                >
                    <Typography variant="h4" component="h4" > Edit Article</Typography>
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
                                value={article.name}
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
                                disabled={true}
                                value={article.author}
                                name="author"
                                type="text"
                                label="Author"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}

                                value={article.description}
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
                                Edit
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            {
                edited &&
                <Alert
                    sx={{
                        margin: 20
                    }} severity="success">Article edited successfully</Alert>
            }
        </>
    );
};
