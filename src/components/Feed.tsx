import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./index";
import { useEffect, useState } from "react";
import { FetchApi } from "../utils/FetchApi";
import { Video } from "../utils/Model";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<Array<Video>>([]);

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "86vh" },
          borderRight: "1px solid #3d3d3d",
          paddingX: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", paddingX: { xs: 2, lg: 5, md: 2 } }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
