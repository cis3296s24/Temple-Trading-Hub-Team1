'use client';

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
} from '@mui/material';

import { useEffect, useState } from 'react';
import '@styles/signIn.css';
import '@styles/global.css';
import { CloudUpload } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UserAuth } from '@context/AuthContext';
import { useRouter } from 'next/navigation';

const createTradeSchema = yup.object({});

const createThread = () => {
  const { user } = UserAuth();
  const [itemimage, setItemImage] = useState('');
  const [category, setCategory] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleUploadTrade = async (e: any) => {
    e.preventDefault();
    // await uploadTrade(
    //   user.id.toString(),
    //   e.itemname,
    //   e.description,
    //   e.price,
    //   e.category
    // );
  };

  useEffect(() => {
    const checkItemImage = async () => {};
    checkItemImage();
  }, [itemimage]);

  const router = useRouter();
  useEffect(() => {
    const checkAuthentication = async () => {
      if (!user) {
        router.push('/');
      }
    };
    checkAuthentication();
  }, [user]);

  const formik = useFormik({
    initialValues: {
      itemname: '',
      description: '',
      price: '',
      category: '',
    },
    validationSchema: createTradeSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values));
      handleUploadTrade(values);
      //handleCreateTrade(values);
    },
  });

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{ minHeight: '50px', position: 'relative', top: '10vh' }}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '50vh', minWidth: '50vh' }}>
        <Grid item>
          <Typography className={'.pageText'} variant='h5'>
            {' '}
            Create A Trade{' '}
          </Typography>
        </Grid>
        <Grid item>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              size='small'
              variant='filled'
              className={'outlinedTextField'}
              style={{ marginBottom: '1em', marginRight: '1em' }}
              id='itemname'
              name='itemname'
              label='Item Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.itemname && Boolean(formik.errors.itemname)}
              //@ts-ignore
              helperText={formik.touched.itemname && formik.errors.itemname}
            />

            <TextField
              fullWidth
              multiline
              maxRows={4}
              minRows={4}
              size='small'
              variant='filled'
              className={'outlinedTextField'}
              style={{ marginBottom: '1em' }}
              id='description'
              name='description'
              label='Item Description'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              //@ts-ignore
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <TextField
              fullWidth
              size='small'
              variant='filled'
              className={'outlinedTextField'}
              style={{ marginBottom: '1em' }}
              id='price'
              name='price'
              label='Price'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              //@ts-ignore
              helperText={formik.touched.price && formik.errors.price}
            />

            <FormControl
              sx={{
                width: '100%',
                marginBottom: '1em',
                marginRight: '1em',
                borderRadius: '10px',
              }}
              className={'categorySelect'}
              variant='filled'>
              <InputLabel variant='filled'>Category</InputLabel>
              <Select
                label='Category'
                value={category}
                onChange={(e) => {
                  handleChange(e);
                  formik.handleChange(e);
                }}
                id='category'
                name='category'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'electronics'}>Electronics</MenuItem>
                <MenuItem value={'tools'}>Tools</MenuItem>
                <MenuItem value={'Apparel'}>Apparel</MenuItem>
                <MenuItem value={'tools'}>Tools</MenuItem>
                <MenuItem value={'instruments'}>Instruments</MenuItem>
                <MenuItem value={'misc'}>Miscellaneous</MenuItem>
              </Select>
            </FormControl>
            <Grid>
              {!itemimage ? null : (
                <Grid
                  item
                  component='img'
                  justifySelf='center'
                  alignSelf='center'
                  width='100%'
                  sx={{
                    height: 233,
                    border: '2px solid #9D2235',
                    borderRadius: '10px',
                  }}
                  alt=''
                  src={itemimage}></Grid>
              )}
            </Grid>
            <Button
              className={'submitButton'}
              sx={{ marginBottom: '1em' }}
              component='label'
              role={undefined}
              variant='contained'
              tabIndex={-1}
              startIcon={<CloudUpload />}>
              Upload Image
              <input
                type='file'
                accept='image/*'
                hidden
                id='image'
                name='image'
                onChange={(e: any) => {
                  const fileReader = new FileReader();
                  fileReader.onload = () => {
                    if (fileReader.readyState === 2) {
                      formik.setFieldValue('image', fileReader.result);
                      //@ts-ignore
                      setItemImage(fileReader.result);
                    }
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
            </Button>

            <Button
              className={'submitButton'}
              sx={{ float: 'right' }}
              type='submit'
              variant='contained'>
              Submit Item
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default createThread;
