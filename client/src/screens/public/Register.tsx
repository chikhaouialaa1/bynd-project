import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, TextField, Grid, Box } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import * as API from "../../api/auth";
import { routes } from '../../constants/routes'
import { EMAIL } from '../../constants/regex'

export const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [invalidInputs, setInvalidInputs] = useState(false)
    const [buttonLoading, setbuttonLoading] = useState(false)

    const handleInputChange = (e: any) => {
        setInvalidInputs(false)
        onChangeParam(e.target.name, e.target.value);
    };

    const handleButtonClick = async () => {
        setbuttonLoading(true)
        API.register(user).then((res) => {
            navigate(routes.login)
        }).catch((err) => {
            setInvalidInputs(true)
            console.log('err', err)
        }).finally(() => {
            setbuttonLoading(false)
        })
    };

    const onChangeParam = (key: string, value: string) => {
        setUser({ ...user, [key]: value });
    };

    return (
        <>
            <h1> Register</h1>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'

                }}
            >
                <Card
                    sx={{
                        padding: 5
                    }}
                >
                    <h1> User details </h1>
                    <Grid container spacing={3} sx={{ padding: 5 }}>
                        <Grid item md={12} sm={12}>
                            <TextField
                                error={invalidInputs}
                                sx={{ width: '50%' }}
                                name="firstname"
                                type="text"
                                onChange={(e) => handleInputChange(e)}
                                label="firstname"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{ width: '50%' }}
                                error={invalidInputs}
                                name="lastname"
                                type="text"
                                onChange={(e) => handleInputChange(e)}
                                label="lastname"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{ width: '50%' }}
                                name="email"
                                onChange={(e) => handleInputChange(e)}
                                error={(!EMAIL.test(user.email) && user.email.length > 0) || invalidInputs}
                                label="email"
                                helperText={!EMAIL.test(user.email) && user.email.length > 0 ? "email : user@company.com" : false}
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{ width: '50%' }}

                                error={(passwordConfirmation != user.password) || invalidInputs}
                                name="password"
                                type="password"
                                onChange={(e) => handleInputChange(e)}
                                label="password"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <TextField
                                sx={{ width: '50%' }}
                                error={passwordConfirmation != user.password || invalidInputs}
                                name="cpassword"
                                type="password"
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                label="confirm password"
                                helperText="password error"
                            />
                        </Grid>
                        <Grid item md={12} sm={12}>
                            <LoadingButton
                                loading={buttonLoading}
                                onClick={handleButtonClick}
                                variant="outlined">
                                Register
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Card>

            </Box>

        </>
    );
};
