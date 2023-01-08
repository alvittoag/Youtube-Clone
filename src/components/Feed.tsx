import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./index";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "colum", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2023 Alvitto AG
        </Typography>
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2, marginLeft: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
