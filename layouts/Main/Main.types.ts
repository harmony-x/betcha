import React from "react";

export interface MainProps {
  children: React.ReactNode;
  buttonIcon: React.ReactNode;
  onInfoClick?: React.MouseEventHandler<HTMLButtonElement>;
  onHistoryClick?: React.MouseEventHandler<HTMLButtonElement>;
}
