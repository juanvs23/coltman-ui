import { PropsWithChildren, ReactNode } from "react";

export interface ButtomProps {
  variant?: string;
  size?: string;
  color?: string;
  disableShadow?: boolean;
  isDisabled?: boolean;
  onclik?: () => void;
  text?: string;
  startIcon?: string;
  endIcon?: string;
  hovered?: string;
}
