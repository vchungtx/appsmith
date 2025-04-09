import React from "react";
import {getMenuItemTextColor} from "pages/AppViewer/utils";
import type {NavigationSetting} from "constants/AppConstants";
import type {ApplicationPayload} from "entities/Application";
import styled from "styled-components";
import {Icon} from "@appsmith/ads";

interface BackToAppsButtonProps {
  currentApplicationDetails?: ApplicationPayload;
  insideSidebar?: boolean;
  isMinimal?: boolean;
}

const StyledAppIcon = styled(Icon)<{
  primaryColor: string;
  navColorStyle: NavigationSetting["colorStyle"];
}>`
  color: ${({ navColorStyle, primaryColor }) =>
    getMenuItemTextColor(primaryColor, navColorStyle, true)};
  width: 16px;
  height: 16px;
`;

const BackToAppsButton = (props: BackToAppsButtonProps) => {
  return null;
};

export default BackToAppsButton;
