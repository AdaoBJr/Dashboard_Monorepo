import { SxProps, Theme } from '@mui/material';

import { ReactFC } from '../React';
interface LinkDetail {
  name: string;
  url: string;
}

interface SxDetail {
  container?: SxProps<Theme>;
  item?: SxProps<Theme>;
}

export interface Links {
  dataLinks?: LinkDetail[];
  sx?: SxDetail;
}

export interface HeaderModuleProps extends ReactFC {
  title?: string;
  linksProps?: Links;
  fixed?: boolean;
  src?: string;
  justify?: string;
  heightHeader?: string;
  widthImg?: string;
  heightImg?: string;
  altImg?: string;
  sx?: SxProps<Theme>;
}
