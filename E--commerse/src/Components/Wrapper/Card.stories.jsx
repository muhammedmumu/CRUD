import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Buttons from '../../Components/Buttons/Button';
import theme from '../../Theme/index';
import CardWrapper from './Card';

export default {
  title: 'Wrapper/Card',
  component: CardWrapper,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export const CardWithIconsAndTooltip = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <CardWrapper
        headerLeft={
          <Box display={"flex"} flex={1}
            sx={{
              backgroundColor: "red"
            }}>
            <Box flex={1}>hey</Box>
            <Box flex={1}>hey</Box>
          </Box>
        }
        headerRight={
          <Box display={"flex"} flex={1} sx={{
            backgroundColor: "green"
          }}>
            <Box flex={1}>hey</Box>
            <Box flex={1}>hey</Box>
          </Box>
        }
        content={
          <Typography variant="body2">
            This card shows status, next steps, and quick actions for your project.
          </Typography>
        }
        actions={
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Buttons variant="outlined" color="primary" size="small">
              Details
            </Buttons>
            <Buttons variant="contained" color="primary" size="small">
              Open
            </Buttons>
          </Box>
        }
      />
    </Box>
  ),
};
