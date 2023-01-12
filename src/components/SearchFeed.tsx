import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { useEffect, useState } from "react";
import { FetchApi } from "../utils/FetchApi";
import { Video } from "../utils/Model";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
          paddingX: { lg: 16, md: 17, sm: 0 },
          textAlign: { xs: "center", md: "start" },
        }}
      >
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
