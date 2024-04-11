"use client";

import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import "../styles/signIn.css";
import "../styles/global.css";
import { CloudUpload, Description } from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from "yup";
import { UserAuth } from '@context/AuthContext';
import { useRouter } from "next/navigation";
import {uploadTrade} from "./uploadTrade";

const createTradeSchema = yup.object({
    itemname: yup
        .string()
        .required("You must name your Item")
        .min(3, "too short")
        .max(60, "too long"),
    description: yup.string().required("Please enter a description"),
    price: yup.string().required("Please enter a price"),
    category: yup.string().required("Please select a category"),
})

const createTrade = () => {
    const { user } = UserAuth();
    const [itemimage, setItemImage] = useState('');
    const [imageupload, setImageUpload] = useState('');
    const [category, setCategory] = useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const router = useRouter();

    const handleUploadTrade= async(e : any) => {
        console.log(imageupload);
        await uploadTrade(user, e.itemname, e.description, e.price, e.category, imageupload)
        //@ts-ignore
        .then( router.push("/createtrade/confirmationpage") )
    }

    useEffect(() => {
        const checkItemImage = async () => {};
        checkItemImage();
    }, [itemimage]);

    useEffect(() => {
        const checkAuthentication = async () => {
            if (!user) {
                router.push("/");
            }
        };
        checkAuthentication();
    }, [user]);

    const formik = useFormik({
        initialValues: {
            itemname: "",
            description: "",
            price: "",
            category: ""
        },
        validationSchema: createTradeSchema,
        onSubmit: (values: any) => {
            handleUploadTrade(values);
            //handleCreateTrade(values);
        },
    });

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            sx={{ minHeight: "50px", 
                position: "relative",
                top: "10vh"
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ width: "50vh", minWidth: "50vh" }}
            >
                <Grid item>
                    <Typography className={".pageText"} variant="h5">
                        {" "}
                        Create A Trade{" "}
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            size="small"
                            variant="filled"
                            className={"outlinedTextField"}
                            style={{ marginBottom: "1em", marginRight: "1em" }}
                            id="itemname"
                            name="itemname"
                            label="Item Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.itemname && Boolean(formik.errors.itemname)
                            }
                            //@ts-ignore
                            helperText={formik.touched.itemname && formik.errors.itemname}
                        />

                        <TextField
                            fullWidth
                            multiline
                            maxRows={4}
                            minRows={4}
                            size="small"
                            variant="filled"
                            className={"outlinedTextField"}
                            style={{ marginBottom: "1em" }}
                            id="description"
                            name="description"
                            label="Item Description"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.description && Boolean(formik.errors.description)
                            }
                            //@ts-ignore
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField
                            fullWidth
                            
                            size="small"
                            variant="filled"
                            className={"outlinedTextField"}
                            style={{ marginBottom: "1em" }}
                            id="price"
                            name="price"
                            label="Price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.price && Boolean(formik.errors.price)
                            }
                            //@ts-ignore
                            helperText={formik.touched.price && formik.errors.price}
                        />

                        <FormControl
                            sx={{
                                width: "100%",
                                marginBottom: "1em",
                                marginRight: "1em",
                                borderRadius: '10px'
                            }}
                            className={"categorySelect"}
                            variant="filled"
                            
                        >
                            <InputLabel variant="filled">Category</InputLabel>
                            <Select
                                label="Category"
                                value={category}
                                onChange={e => {handleChange(e); formik.handleChange(e)}}
                                id="category"
                                name="category"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"electronics"}>
                                    Electronics
                                </MenuItem>
                                <MenuItem value={"tools"}>Tools</MenuItem>
                                <MenuItem value={"Apparel"}>Apparel</MenuItem>
                                <MenuItem value={"tools"}>Tools</MenuItem>
                                <MenuItem value={"instruments"}>
                                    Instruments
                                </MenuItem>
                                <MenuItem value={"misc"}>
                                    Miscellaneous
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <Grid>
                        {!itemimage ? null : (
                        <Grid item
                            component="img"
                            justifySelf="center"
                            alignSelf="center"
                            width="100%"
                            sx={{
                                height: 233,
                                border: "2px solid #9D2235",
                                borderRadius: "10px"
                            }}
                            alt=""
                            src={itemimage}
                            >
                        </Grid>
                        )}

                        </Grid>
                        <Button
                            className={"submitButton"}
                            sx={{ marginBottom: "1em" }}
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUpload />}
                        >
                            Upload Image
                            <input type="file" accept="image/*" hidden id="image" name="image"
                            onChange={(e : any) => {
                                const fileReader = new FileReader();
                                fileReader.onload = () => {
                                  if (fileReader.readyState === 2) {
                                    formik.setFieldValue('image', fileReader.result);
                                    //@ts-ignore
                                    setItemImage(fileReader.result);
                                    setImageUpload(e.target.files[0]);
                                  }
                                };
                                fileReader.readAsDataURL(e.target.files[0]);
                              }}/>
                        </Button>

                        <Button
                            className={"submitButton"}
                            sx={{ float: "right" }}
                            type="submit"
                            variant="contained"
                        >
                            Submit Item
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default createTrade;
