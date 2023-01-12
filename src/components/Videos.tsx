import { Stack, Box } from "@mui/material";
import { Video } from "../utils/Model";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

type Props = {
  videos: Video[];
};

const Videos = ({ videos }: Props) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
