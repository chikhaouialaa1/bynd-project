import { Box, TableContainer, Grid, IconButton, Button, Table, TableRow, TableCell, TableHead, TableBody, TablePagination, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from "./SearchBar";
import { DeletingModal } from "./DeletingModal";
import { routes } from '../constants/routes'
import * as API from "../api/admin.articles";
import * as PUBLIC_API from "../api/public";

import {
    getAccessToken,
    verifyToken
} from "../utils/auth";


import { useEffect, useState } from 'react'
// @ts-ignore
export const RequestsList = () => {
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [targetArticles, setTargetArticles] = useState(null)

    const columns = [
        { title: 'Name', width: 60 },
        { title: 'Author', width: 60 },
        { title: 'Created', width: 60 },
        { title: 'Description', width: 170 },
        { title: '-', width: 30 },
    ];


    useEffect(() => {
        // EXAMPLE
        const myTestData = [{
            _id: '1',
            name: 'test Ala',
            author: 'Ala',
            description: 'Ceci est un article fictif pour test.',
            created_at: new Date().toISOString()
        }];
        setArticles(myTestData)
    }, []);

    const fetchData = () => {
        if (getAccessToken()) {
            API.list().then((res) => {
                setArticles(res.data)
            })
        }
        else {
            PUBLIC_API.list().then((res) => {
                setArticles(res.data)
            })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>, newPage: number) => {
        setPage(newPage);
    };


    const handleDeleteArticle = (_user: any) => {
        setTargetArticles(_user)
    }

    const handleEditArticle = (_user: any) => {
        navigate(`/admin/article/${_user._id}`)
    }



    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClick = (_id: string) => {
        navigate(`/article/${_id}`)
    }

    const handleCreateNewArticleClick = () => {
        navigate(routes.addArticle)
    }

    return (
        <>
            {/* @ts-ignore */}
            <DeletingModal
                refreshData={fetchData}
                openModal={targetArticles !== null}
                closeModalButton={true}
                confirmationButton={true}
                closeModal={setTargetArticles}
                modalTitle={"are you sure you want to delete this article ?"}
                modalBodyText={"would you confirm this action ?"}
                modalStyle={null}
                article={targetArticles}
            />
            <Box
                sx={{
                    margin: 2,
                }}
            >
                <Box
                    sx={{
                        marginTop: 10
                    }}
                >
                    <SearchBar refreshData={fetchData} setData={setArticles} />
                </Box>

                <Box
                    sx={{
                        marginTop: 5
                    }}
                >
                    {
                        verifyToken() &&
                        <Grid container >
                            <Grid item md={11.5} />
                            <Grid item md={0.5} >
                                <Button
                                    onClick={
                                        handleCreateNewArticleClick
                                    }
                                    variant="outlined"
                                >
                                    New
                                </Button>
                            </Grid>
                        </Grid>
                    }
                </Box>
                <TableContainer
                >
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((column: object) => (
                                        // @ts-ignore
                                        <TableCell sx={{ width: column?.width, fontWeight: 'bold' }} align="left" >{column?.title}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? articles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : articles
                            ).map((row: any) => (

                                <TableRow
                                    key={row.name}
                                >
                                    <TableCell
                                        align="left">
                                        <span
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => handleClick(row?._id)}
                                        >
                                            {row.name}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        align="left">{row.author}</TableCell>
                                    <TableCell align="left">{row.created_at.split('T')[0]}</TableCell>
                                    <TableCell
                                        style={{
                                            cursor: 'pointer'
                                        }}

                                        align="left">{row.description}</TableCell>
                                    <TableCell
                                        align="left">
                                        {
                                            getAccessToken() &&
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        marginTop: '8px'
                                                    }}
                                                >
                                                    <Tooltip title="Edit" >
                                                        <EditIcon
                                                            onClick={() => handleEditArticle(row)}

                                                        />
                                                    </Tooltip>
                                                </Box>
                                                <Box>
                                                    <Tooltip title="Delete" >
                                                        <IconButton
                                                            onClick={() => handleDeleteArticle(row)}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Box>
                                            </Box>
                                        }
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={articles.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    // @ts-ignore
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </Box>
        </>
    );
};
