import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material';
import { ReactNode, useMemo } from 'react';
import { useSelector } from '../redux/store';
import breakpoints from './breakpoints';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import typography from './typography';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const { mode } = useSelector((state) => state.theme);
  const isLight = mode === 'light';
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight],
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
