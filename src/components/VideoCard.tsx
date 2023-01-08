import { Video } from "../utils/Model";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constans";

type Props = {
  video: Video;
};

const VideoCard = ({ video }: Props) => {
  console.log(video);
  return (
    <Card
      sx={{
        width: { md: "350px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video.snippet?.thumbnails?.high?.url}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoChannelUrl}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video.snippet?.channelTitle || demoChannelUrl}
          </Typography>
        </Link>
        <Link
          to={
            video.snippet.channelId
              ? `/video/${video.snippet.channelId}`
              : demoVideoUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
