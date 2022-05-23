import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';


function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>404 - page not found</title>
        <meta name="description" content="OOPs! that page is not found" />
      </Helmet>
      <div className={"h-100 my-auto w-100 align-items-center"} title="404">
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          
        >
          <Container maxWidth="md">
            <h2 className="bold text-center">
              404: The page you are looking for isn’t here
            </h2>
            <Typography align="center" color="textPrimary" variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is,
              <NavLink to="/">{" go back to home!"}</NavLink>
            </Typography>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default PageNotFound;
