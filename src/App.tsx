import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "red" }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
