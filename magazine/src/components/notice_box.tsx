import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export interface NoticeProps {
  notice: string;
  noticeType: string;
  children: React.ReactNode;
}

const NoticeBox: React.FC<NoticeProps> = ({ notice, noticeType, children }) => {
  let icon;
  switch (noticeType) {
    case "warning":
      icon = faCircleExclamation;
      break;
    case "info":
      icon = faCircleInfo;
      break;
    case "success":
      icon = faCircleCheck;
      break;
    case "note":
      icon = faCircleInfo;
    default:
      icon = faCircleInfo; // Default icon
  }

  return (
    <div className={`notice ${noticeType}`}>
      <p className="first notice-title t-TitleSans title">
        <span className={`icon-notice baseline ${notice}`}>
          <FontAwesomeIcon icon={icon} />
        </span>
        {notice}
      </p>
      <div className="notice-text">{children}</div>
    </div>
  );
};

export default NoticeBox;
