"use client";

import IconButton from "@common/icon-button";
import BookmarkIcon from "@icons/bookmark-icon";
import LocationPinIcon from "@icons/location-pin-icon";
import RankingIcon from "@icons/ranking-icon";
import ChatBubbleIcon from "@icons/chat-bubble-icon";
import ConfigIcon from "@icons/config-icon";

const IconLinkList = () => {
  return (
    <div className="flex mo:flex-col justify-center items-center gap-2">
      <div className="flex gap-2">
        <IconButton icon={<RankingIcon size={34} link />} text="랭킹" />
        <IconButton icon={<BookmarkIcon size={34} link />} text="즐겨찾기" />
        <IconButton icon={<LocationPinIcon size={34} link />} text="위치등록" />
      </div>
      <div className="flex gap-2">
        <IconButton icon={<ChatBubbleIcon size={34} link/>} text="채팅" />
        <IconButton icon={<ConfigIcon size={34} link/>} text="설정" />
      </div>
    </div>
  );
};

export default IconLinkList;
