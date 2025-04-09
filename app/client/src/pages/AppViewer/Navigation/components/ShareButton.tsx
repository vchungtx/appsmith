import React from "react";
import type {ApplicationPayload} from "entities/Application";

interface ShareButtonProps {
  currentApplicationDetails?: ApplicationPayload;
  currentWorkspaceId: string;
  insideSidebar?: boolean;
  isMinimal?: boolean;
}

const ShareButton = (props: ShareButtonProps) => {
  return null;
};

export default ShareButton;
