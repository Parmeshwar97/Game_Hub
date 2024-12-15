import { Box, Grid, GridItem } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <GridItem area={"main"} bg={"red"}>
        main
      </GridItem>
      <Box display={{ base: "none", md: "block" }}>
        <GridItem area={"aside"} bg={"blue"}>
          area
        </GridItem>
      </Box>
    </Grid>
  );
}

export default App;
