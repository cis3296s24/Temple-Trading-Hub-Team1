//import Image from "next/image";
import './styles/global.css';
import './styles/About.css';
import '@fontsource/kadwa/700.css';
// import Item from '@components/ItemEx';
// import img1 from './images/plato_complete_works.jpg';
import vans from './Images/worn_Vans.webp';
import guitar from './Images/A_guitar.jpg';
import airpods from './Images/airpods.webp';
// import img4 from './Images/worn_Vans.webp';
// import img5 from './Images/used_iphone_xr.webp';
import React from 'react';
import { Container, CssBaseline, Box, Avatar, Stack, Button, Typography } from '@mui/material';


const Vans = vans.src;
const Guitar = guitar.src;
const Airpods = airpods.src;
// const Sweater = img3.src;
// const vans = img4.src;
// const XR = img5.src;
//import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';

//testing

// Example hero image - replace with your specific image
//import heroImage from './Images/';

function ImageAvatars() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: 4
      }}>
        {/* Hero Text */}
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '3rem' }}>
          Discover Amazing Products
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 4 }}>
          Explore the world of unique and inspiring items
        </Typography>

        {/* Call to Action Button */}
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Container>
    </React.Fragment>
  );
}

export default ImageAvatars;




// function ImageAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <React.Fragment>
//         <CssBaseline />
//         <Container maxWidth="sm" sx={{
//           display: 'flex',       // Makes the container a flex container
//           flexDirection: 'column', // Stack children vertically
//           alignItems: 'center',  // Center horizontally
//           justifyContent: 'center', // Center vertically
//           height: '200vh'         // Use full viewport height
//         }}>

//           {/* Box with rounded corners */}
//           <Box sx={{
//             bgcolor: '#e89d1e',
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'top',
//             padding: 2,
//             borderRadius: '16px'  // Rounded corners, adjust this value as needed
//           }}>
//             <Avatar alt="Worn Vans" src={vans.src} sx={{ width: 100, height: 100 }} />
//             <Avatar alt="A Guitar" src={guitar.src} sx={{ width: 100, height: 100 }} />
//             <Avatar alt="Airpods" src={airpods.src} sx={{ width: 100, height: 100 }} />
//           </Box>

//         </Container>
//       </React.Fragment>
//     </Stack>
    
//   );

  
// }
// export default ImageAvatars; 
 

/* function Hub() {
  return (
    // <main className={styles.Hello}>
    //   <div className={styles.upper_content}>
    //     <div className={styles.display_demo}>
    //       <Item
    //         imageUrl={Plato}
    //         item_name='Plato complete works'
    //         item_condition='Good Condition'
    //       />
    //       <Item
    //         imageUrl={Sweater}
    //         item_name='pastel-sweater'
    //         item_condition='Never Worn'
    //       />
    //       <Item
    //         imageUrl={StanleyCup}
    //         item_name='Stanley Cup - white'
    //         item_condition='never used'
    //       />
    //       <Item
    //         imageUrl={vans}
    //         item_name='Low Top Vans - Black'
    //         item_condition='Heavily Used'
    //       />
    //       <Item
    //         imageUrl={Rev}
    //         item_name='Revenge Hoodie Embroidered'
    //         item_condition='Never Worn'
    //       />
    //       <Item
    //         imageUrl={XR}
    //         item_name='Iphone XR - Black'
    //         item_condition='used'
    //       />
    //     </div>
    //     <div className={styles.slogan}>
    //       <h1 id={styles.one}>
    //         Trading made <span>Simple</span>,
    //       </h1>
    //       <h1 id={styles.two}>
    //         Trading made <span>Safe</span>,
    //       </h1>
    //       <h1 id={styles.three}>
    //         Trading made <span>Easy</span>.
    //       </h1>
    //     </div>
    //   </div>
    // </main>
    <Container className='about-container' maxWidth='lg'>
      <div className='about-container'>
        <h1>
          Trading made <span>SIMPLE</span>
        </h1>
        <h1>
          Trading made <span>Safe</span>
        </h1>
        <h1>
          Trading made <span>Easy</span>
        </h1>
      </div>
    </Container>
  );
} */

//export default Hub;
