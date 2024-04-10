'use client';

import {
  Button,
  Grid,
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
import { uploadThread } from './uploadThread';

const createTradeSchema = yup.object({
  description: yup.string().required('Please enter a description'),
});

const createThread = () => {
  const { user } = UserAuth();
  const [itemimage, setItemImage] = useState('');
  const [imageupload, setImageUpload] = useState('');

  const router = useRouter();

  const handleUploadTrade = async (e: any) => {
    await uploadThread(user, e.description, imageupload)
      //@ts-ignore
      .then(router.push('/threads'));
  };

  useEffect(() => {
    const checkItemImage = async () => {};
    checkItemImage();
  }, [itemimage]);

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
      description: '',
    },
    validationSchema: createTradeSchema,
    onSubmit: (values: any) => {
      handleUploadTrade(values);
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
            Create A Thread
          </Typography>
        </Grid>
        <Grid item>
          <form onSubmit={formik.handleSubmit}>
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
                      setImageUpload(e.target.files[0]);
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
              Create Thread
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default createThread;
