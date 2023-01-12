import { Stack, Box } from "@mui/material";
import { Video } from "../utils/Model";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { ResponsiveStyleValue } from "@mui/system";

type Props = {
  videos: Video[];
  direction?:
    | ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse">
    | undefined;
};

const Videos = ({ videos, direction }: Props) => {
  return (
    <Stack
      direction={direction || { xs: "column", sm: "row" }}
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
    >
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
