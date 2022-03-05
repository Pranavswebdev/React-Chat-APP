import React from "react";
import { Box, Grid, Container, Link } from "@mui/material";
import '../Footer/footer.css'

function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        id='#f1'

      >
             <Container  style={{position:'relative'}}  className="container"  maxWidth="lg">


                <img className="footerimg" style={{maxWidth:'80vw'}}  src="https://images.unsplash.com/photo-1605392741222-6facbd3d531e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80" alt=""/>


            <Grid  bottom className="tag" container spacing={5}>
            <Grid item xs={12} sm={4} spacing={5}>
              <Box borderBottom={1} color="white">
                Help{" "}
              </Box>

              <Box>
                <Link> Contact </Link>
              </Box>

              <Box>
                <Link> Support </Link>
              </Box>

              <Box>
                <Link> Privacy </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} spacing={5}>
              <Box borderBottom={1} color="white">
                Message{" "}
              </Box>

              <Box>
                <Link> Backup </Link>
              </Box>

              <Box>
                <Link> History </Link>
              </Box>

              <Box>
                <Link> Roll </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} spacing={5}>
              <Box borderBottom={1} color="white">
                Account{" "}
              </Box>

              <Box>
                <Link> Login </Link>
              </Box>

              <Box>
                <Link> Register </Link>
              </Box>
            </Grid>
          </Grid>

            <Box color='white' textAlign="center" pt={{xs:5,sm:10}} pb={{xs:5,sm:0}} >

            Rental Zone &reg; {new Date().getFullYear()}

            </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
