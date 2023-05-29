import { Input } from '@mui/joy';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import * as API from "../api/public";

// @ts-ignore
export const SearchBar = ({ setData, refreshData }) => {
    const [search, setSearch] = useState('')

    const handleChange = (e: any) => {
        setSearch(e.target.value);
        API.search({ search }).then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        if (search === '') {
            refreshData()
        }
    }, [search])

    return (
        <>
            <Box
                sx={{
                    marginTop: 15,
                }}
            >
                <Input
                    onChange={handleChange}
                    placeholder="search article or type article name…"
                />
            </Box>
        </>
    )
}