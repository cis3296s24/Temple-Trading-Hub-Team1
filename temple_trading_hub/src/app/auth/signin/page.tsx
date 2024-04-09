"use client";

import "../../Styles/global.css";
import { UserAuth } from "@context/AuthContext";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../styles/signin.css";
import { useFormik } from "formik";
import * as yup from "yup";

const signInSchema = yup.object({
    email: yup
        .string()
        .required("Provide @temple.edu Email")
        .email()
        .min(13, "email too short")
        .max(60, "too long"),
    password: yup.string().required("Please enter your password"),
});

const signIn = () => {
    const router = useRouter();
    const { user, signIn } = UserAuth();
    
    const handleSignIn = async (e: any) => {
        await signIn(e.email, e.password);
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            if (user) {
                router.push("/");
            }
        };
        checkAuthentication();
    }, [user]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: (values: any) => {
            handleSignIn(values);
        },
    });

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "50vh" }}
        >
            <Grid item>
                <Typography className="pageText" variant="h4" color="primary">
                    Sign In
                </Typography>
            </Grid>

            <Grid
                className="loginComponent"
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        variant="filled"
                        className={"outlinedTextField"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        //@ts-ignore
                        helperText={formik.touched.email && formik.errors.email}
                        style={{ marginBottom: "1em" }}
                    />

                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="filled"
                        className={"outlinedTextField"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        //@ts-ignore
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                        style={{ marginBottom: "1em" }}
                    />

                    <Button
                        className={"submitButton"}
                        type="submit"
                        variant="contained"
                    >
                        Sign In
                    </Button>
                </form>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    Dont have an account?{" "}
                    <Link href={"/auth/signup"}>Sign Up</Link>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default signIn;
