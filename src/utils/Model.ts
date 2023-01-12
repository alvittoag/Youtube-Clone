export type Category = {
  name: string;
  icon: JSX.Element;
};

export type Video = {
  id: IdVideo;
  snippet: SnippetVideo;
};

type IdVideo = {
  videoId: string;
  channelId: string;
};

type SnippetVideo = {
  channelId: string;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
};

type Thumbnails = {
  default: ImgThumbnail;
  high: ImgThumbnail;
  medium: ImgThumbnail;
};

type ImgThumbnail = {
  height: number;
  url: string;
  width: string;
};

export type VideoDetails = {
  snippet: SnippetVideoDetail;
  statistics: StatisticsVideoDetail;
};

type SnippetVideoDetail = {
  title: string;
  channelId: string;
  channelTitle: string;
};

type StatisticsVideoDetail = {
  viewCount: string;
  likeCount: string | null | undefined;
};
