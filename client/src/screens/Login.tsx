import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, TextField, Grid, Box, Typography, Link } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import * as API from "../api/auth";
import { setAccessToken } from '../utils/auth'
import { routes } from '../constants/routes'
import { EMAIL } from '../constants/regex'

export const Login = () => {
  const navigate = useNavigate()
  const [authValues, setAuthValues] = useState({
    email: "",
    password: "",
  });
  const [invalidInputs, setInvalidInputs] = useState(false)
  const [buttonLoading, setbuttonLoading] = useState(false)

  const handleInputChange = (e: any) => {
    setInvalidInputs(false)
    onChangeParam(e.target.name, e.target.value);
  };
  const handleButtonClick = async () => {
    setbuttonLoading(true)
    API.signin(authValues).then((res) => {
      const { accesstoken } = res.data
      setAccessToken(accesstoken)
      navigate(routes.home)
    }).catch((err) => {
      setInvalidInputs(true)
      console.log('err', err)
    }).finally(() => {
      setbuttonLoading(false)
    })
  };

  const onChangeParam = (key: string, value: string) => {
    setAuthValues({ ...authValues, [key]: value });
  };
  return (
    <>
      <h1> Bynd Project</h1>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'

        }}
      >
        <Card
          sx={{
            padding: 5,
            width: '40%'
          }}
        >
          <Typography variant="h4" component="h4" > Login</Typography>
          <Grid container spacing={3} sx={{ padding: 5 }}>
            <Grid item md={12} sm={12}>
              <TextField
                name="email"
                onChange={(e) => handleInputChange(e)}
                error={invalidInputs || !EMAIL.test(authValues.email)}
                label="login"
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                error={invalidInputs}
                name="password"
                type="password"
                onChange={(e) => handleInputChange(e)}
                label="password"
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <LoadingButton
                loading={buttonLoading}
                onClick={handleButtonClick} variant="outlined">
                Login
              </LoadingButton>
            </Grid>
            <Grid item md={12} sm={12}>
              <Link
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(routes.register)}>
                Register now
              </Link>
            </Grid>
          </Grid>
        </Card>


      </Box>
    </>
  );
};
