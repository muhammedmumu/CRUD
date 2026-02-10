import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Buttons from './Button';

// Create a default theme for Storybook
const defaultTheme = createTheme();

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Buttons,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'contained',
    color: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
};

export const Success = {
  args: {
    variant: 'contained',
    color: 'success',
    size: 'medium',
    children: 'Success Button',
  },
};

export const Error = {
  args: {
    variant: 'contained',
    color: 'error',
    size: 'medium',
    children: 'Error Button',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    children: 'Outlined Button',
  },
};

export const Text = {
  args: {
    variant: 'text',
    color: 'primary',
    size: 'medium',
    children: 'Text Button',
  },
};

export const Small = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Large = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

export const WithClick = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

// Story showing all variants
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Buttons variant="contained" color="primary" size="medium">
      Contained
    </Buttons>
    <Buttons variant="outlined" color="primary" size="medium">
      Outlined
    </Buttons>
    <Buttons variant="text" color="primary" size="medium">
      Text
    </Buttons>
  </div>
);

// Story showing all colors
export const AllColors = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Buttons variant="contained" color="primary" size="medium">
      Primary
    </Buttons>
    <Buttons variant="contained" color="secondary" size="medium">
      Secondary
    </Buttons>
    <Buttons variant="contained" color="success" size="medium">
      Success
    </Buttons>
    <Buttons variant="contained" color="error" size="medium">
      Error
    </Buttons>
    <Buttons variant="contained" color="info" size="medium">
      Info
    </Buttons>
    <Buttons variant="contained" color="warning" size="medium">
      Warning
    </Buttons>
  </div>
);

// Story showing all sizes
export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Buttons variant="contained" color="primary" size="small">
      Small
    </Buttons>
    <Buttons variant="contained" color="primary" size="medium">
      Medium
    </Buttons>
    <Buttons variant="contained" color="primary" size="large">
      Large
    </Buttons>
  </div>
);

export const Usingrest = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Buttons variant="contained" color="primary" size="medium" disabled
      startIcon={<span role="img" aria-label="lock">🔒</span>}>
      Disabled Button
    </Buttons>
    <Buttons>
      Default Button
    </Buttons>
  </div>
);
export const Usingreest = () => (
  < div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Buttons variant="contained" color="primary" size="medium" disabled
      startIcon={<span role="img" aria-label="lock">🔒</span>}>
      Disabled Button
    </Buttons>
    <Buttons>
      Default Button
    </Buttons>
  </div >
);