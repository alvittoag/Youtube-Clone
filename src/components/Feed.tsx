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
    <Stack sx={{ flexDirection: { sx: "colum", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "86vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2023 Alvitto AG
        </Typography>
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", paddingX: 4 }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
