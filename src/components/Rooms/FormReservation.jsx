import React, {useState} from 'react'
import styled from 'styled-components'
import {TextField, Grid, FormControl, Select, MenuItem, InputLabel} from '@mui/material'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { Formik } from 'formik'

const FormReservation = ({price}) => {
    
    const StyledButton = styled.button`
        text-decoration: none;
        background-color: #BE0E0E;
        color: #FFF;
        font-weight: 600;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: large;
        border-radius: 10px;
        &:hover{
            color: #FFF;
            background-color: #8d1111;
            transition-duration: 0.5s;
            cursor: pointer;
        }
        label{
            cursor: pointer;
        }
    `
  return (
    <Formik
        validateOnChange={true}
        initialValues={{
            checkIn: "",
            checkOut: "",
            people: "",
            iva: "",
            subtotal: "",
            total: ""
        }}
        
        validate={(values) => {
            if (values.checkIn != "" && values.checkOut != "") {
                console.log(values)
                const diffTime = Math.abs(new Date(values.checkIn) - new Date(values.checkOut))
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                values.subtotal = diffDays * price
            }
        }} 
        
        onSubmit={(values) => {
            console.log(values)
        }}
        
    >
        {({
            values,
            handleChange,
            setFieldValue,
            handleSubmit
        }) => (
            <form
                onSubmit={handleSubmit}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <DemoItem
                            label="Llegada"
                        >
                            <DatePicker
                                disablePast
                                onChange={(date) => {setFieldValue("checkIn",date,true)}}
                                renderInput={(params) => <TextField 
                                    {...params} 
                                    fullWidth
                                    inputProps={{
                                    style: {
                                        fontSize: 15
                                    }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 15
                                        }
                                    }}
                                />}
                                value={values.checkIn}
                            />
                        </DemoItem>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DemoItem
                            label="Salida"
                        >
                            <DatePicker
                                disablePast
                                onChange={(date) => {setFieldValue("checkOut",date,true)}}
                                renderInput={(params) => <TextField 
                                {...params} 
                                fullWidth
                                inputProps={{
                                    style: {fontSize: 15}
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 15
                                    }
                                }}
                                />}
                                value={values.checkOut}
                            />
                        </DemoItem>
                    </Grid>
                </Grid>
                <FormControl
                    sx={{width: "100%", marginTop: "10px", marginBottom: "10px"}}
                    >
                    <InputLabel 
                    id="demo-simple-select-label"
                    sx={{
                        fontSize: 15
                    }}
                    >
                    Personas
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    name='people'
                    value={values.people}
                    onChange={handleChange}
                    >
                    <MenuItem 
                        value={1}
                        sx={{fontSize: 15}}
                    >
                        1
                    </MenuItem>
                    <MenuItem 
                        value={2}
                        sx={{fontSize: 15}}
                    >
                        2
                    </MenuItem>
                    <MenuItem 
                        value={3}
                        sx={{fontSize: 15}}
                    >
                        3
                    </MenuItem>
                    <MenuItem 
                        value={4}
                        sx={{fontSize: 15}}
                    >
                        4
                    </MenuItem>
                    </Select>
                </FormControl>
                <StyledButton>
                    Reservar
                </StyledButton>
            </form>
            
        )}
    </Formik>
  )
}

export default FormReservation