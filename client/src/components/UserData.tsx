import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import * as API from "../api/user.profile";

// @ts-ignore
export const UserData = ({ field, refreshData, fieldKey, data, stateChanger, user }) => {
    const [editField, setEditField] = useState(false)
    const [inputValue, changeInputValue] = useState(data)

    const handleEditFieldButtonClick = () => {
        stateChanger(field)
        setEditField(false)
    }

    const handleInputBlur = () => {
        setEditField(!editField)
        changeInputValue(data)
    };

    const handleInputChange = (event: any) => {
        changeInputValue(event.target.value)
    };

    const handlekeyboardDown = (event: any) => {
        // enter
        if (event.charCode === 13 || event.key === 'Enter') {
            stateChanger(field)
            user[fieldKey] = inputValue
            const { firstname, lastname, phone, email } = user
            API.update({ firstname, lastname, phone, email }).then((user) => {
                // add alerte box
                refreshData()
                setEditField(false)
            })
        }
    };
    

    return (
        <>
            <Box
                sx={{
                    margin: '10px',
                    border: '2px solid',
                    borderColor: '#f2f2f2',
                    borderRadius: '25px',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        padding: 1.5,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {
                        !editField ?
                            <>
                                <span style={{ color: '#666666', margin: '1px' }} > {field ? `${field}` : ''}</span>
                                <span style={{ fontWeight: 'bold', margin: '1px' }} >  {data ? `${data}` : ''}</span>
                            </>
                            :
                            <TextField
                                onKeyPress={(e) => { handlekeyboardDown(e) }}
                                value={inputValue} name={data} onBlur={handleInputBlur} onChange={handleInputChange} placeholder={data} label={field} variant="standard" />
                    }
                </Box>
                <Box
                    sx={{
                        padding: 1.5,
                    }}
                >
                    {
                        editField ?
                            <IconButton disabled={data === inputValue} onClick={() => handleEditFieldButtonClick()} ><SaveIcon /></IconButton> :
                            <IconButton onClick={() => setEditField(true)} ><EditIcon /></IconButton>
                    }
                </Box>
            </Box>
        </>
    )
}