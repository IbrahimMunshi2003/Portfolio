import * as React from "react";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



const Herosection=()=> {
    return(
      <Container>
      <div>
        <Typography variant="h1" align="center" sx={{backgroundColor:'yellowgreen',color:'green'}}>hi iam munshi</Typography>
        <Typography variant="h4" align="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet velit quidem fuga vel, officiis qui rerum quo fugit voluptate. </Typography>
        <div>
          <Image src="/images/profile.jpg"
          alt="munshi profile"
          width={100}
          height={100}
          
          />
        </div>
      </div>
      </Container>
    );
  }
 

  export default Herosection;