import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Container, Grid } from "@mui/material";

const ReservationCustomer = ({ customerForm, setCustomerForm }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const headers = {
    "X-CSCAPI-KEY": "VEdXbjVMT0VqbGNSbE9TWGJXNzBNM2ZhR1hlR29oSHVwN21DeURZVg==",
  };

  useEffect(() => {
    const getCoutries = async () => {
      try {
        const response = await axios.get(
          "https://api.countrystatecity.in/v1/countries",
          {
            headers: headers,
          }
        );
        setCountries(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    getCoutries();
  }, []);

  const handleCountry = async (e) => {
    try {
      setCustomerForm({
        ...customerForm,
        [e.target.name]: e.target.value,
      });
      const response = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${e.target.value}/states`,
        {
          headers: headers,
        }
      );
      setStates(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleState = async (e) => {
    try {
      setCustomerForm({
        ...customerForm,
        [e.target.name]: e.target.value,
      });
      const response = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${customerForm.country}/states/${e.target.value}/cities`,
        {
          headers: headers,
        }
      );
      setCities(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };


  const handleCity = async (e) => {
    console.log(e)
    setCustomerForm({...customerForm, [e.target.name]: e.target.value})
  }
  return (
      <Container>
        <Typography variant="h5" sx={{ marginBottom: '2rem'}}>
            Datos Personales
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Nombre(s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Apellido(s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">País</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="country"
                name="country"
                onChange={handleCountry}
                value={customerForm.country}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.iso2}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="state"
                name="state"
                onChange={handleState}
                value={customerForm.state}
              >
                {states.map((state) => (
                  <MenuItem key={state.id} value={state.iso2}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="city"
                name="city"
                onChange={handleCity}
                value={customerForm.city}
              >
                {cities.map((city) => (
                  <MenuItem key={city.id} value={city.iso2}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md>
            <TextField
              id="outlined-basic"
              label="Direccion"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Numero celular"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
  );
};

export default ReservationCustomer;
