import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Overrides from './overrides';
import {
    Primary,
    PrimaryLight,
    PrimaryMedium,
    PrimaryDark,
    PrimaryContrast,
    Secondary,
    SecondaryDark,
    success,
    DrawerMainColor,
    ProgressBgColor,
    darkBlue,
    adminDashIconBgColor,
    Background
} from './constents';

const theme = createTheme({
    cssVariables: true,

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shape: {
        borderRadius: 8,
    },
    palette: {
        primary: {
            main: Primary,
            light: PrimaryLight,
            medium: PrimaryMedium,
            dark: PrimaryDark,
            contrastText: PrimaryContrast,
        },
        secondary: {
            main: Secondary,
            dark: SecondaryDark,
        },
        success: {
            main: success,
            [100]: "#beecd9",
            [200]: "#01897B",
            [250]: "#71DA9D",
            [300]: "#388e3c",
            [400]: "#80c128",
            [500]: "#2a9329",
            [700]: "#7BB42D",
            [800]: "#4caf50",
        },
        drawer: {
            main: DrawerMainColor,
        },
        linearprogress: {
            main: ProgressBgColor,
        },
        grey: {
            [50]: "#E4E4E4",
            100: "#EFEFEF",
            200: "#D5D6D8",
            300: "#A8B0B8",
            400: "#74808F",
            500: "#4F5866",
            600: "#293444",
            700: "#181E27",
            [150]: "#7c92aa",
            [250]: "#e2e2eb",
            [350]: "#6b6d8229",
            [450]: "#6b6d828A",
            [550]: "#8F95A324",
            [650]: "#e0e0e0",
            [800]: "#bdbecc",
            [850]: "#6b6d82",
            [900]: "#6b6d8242",
            [1000]: "#0000008a",
        },
        black: {
            main: "#000000",
            [100]: "#787676",
            [150]: "#605f5f",
            [200]: "#666666",
            [250]: "#383e4c",
            [300]: "#333333",
            [350]: "#9f9d9d",
            [400]: "#1e1e2c",
            [500]: "#2b3b5c",
            [600]: "#383e4c",
            [1000]: "#000000",
        },
        blue: {
            [100]: "#D8EAFF",
            [300]: "#2196f3",
            [500]: darkBlue,
            [700]: "#374edd",
            [900]: "#0f5185",
            [1000]: "#007aff",
        },
        lightBlue: {
            [50]: "#037baf1A",
            [100]: "#ECF5FF",
            [150]: "#f4f2ff",
            [200]: "#D9EDF7",
            [250]: "#DDF3FA",
            [300]: adminDashIconBgColor,
            [350]: "#0da9de40",
            [400]: "#99BBFF",
            [800]: "#0da9de",
            [820]: "#0da9de0F",
        },
        purple: {
            [100]: "#D9D5EC",
            [150]: "#f3f3fb",
            [200]: "#f2f2f9",
            [300]: "#edecf6",
        },
        lightgrey: {
            [100]: "#f3ebeb",
            [150]: "#e7edf3",
            [200]: "#c0c0c0",
            [250]: "#f5f5f5",
            [300]: "#3E4953",
            [500]: "#6b6b82",
            [600]: "#808080",
        },
        action: {
            disabledBackground: PrimaryContrast,
        },
        background: {
            default: Background,
            paper: "#ffffff",
        },
        text: {
            primary: "#181E27",
            secondary: "#74808F",
            disabled: "#A8B0B8",
        },
        warning: {
            main: "#FFD54F",
            secondary: "#fda844",
            [100]: "#ff9800",
            [500]: "#663c00",
        },
        error: {
            main: "#E03842",
        },
        danger: {
            main: "#c2212a",
            [100]: "#e9cbcb",
            [200]: "#9F2128",
            [300]: "#cf5a5a",
            [900]: "#a72928",
        },
    },
    typography: {
        fontFamily: "Inter, Archivo, sans-serif",
        fontWeightBold: 700,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        button: {
            textTransform: "none",
            fontWeight: 500,
        },
        h1: {
            fontSize: "74px",
            fontWeight: 700,
            lineHeight: 0.97, // 72px / 74px
        },
        h2: {
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: 2.25, // 72px / 32px
        },
        h3: {
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: 1, // 24px / 24px
        },
        h4: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: 1.5, // 24px / 16px
            fontFamily: "Archivo",
        },
        h5: {
            fontSize: "1rem", // 16px
            fontWeight: 600,
        },
        h6: {
            fontSize: "0.875rem", // 14px
            fontWeight: 600,
        },
        body1: {
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: 1.43, // 20px / 14px
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.43, // 20px / 14px
        },
        subtitle1: {
            fontSize: "0.75rem", // 12px
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: "0.6875rem", // 11px
            fontWeight: 500,
        },
    },
});

theme.props = {
    MuiButton: {
        disableRipple: true,
        disableFocusRipple: true,
        disableElevation: true,
    },
    MuiIconButton: {
        disableRipple: true,
        disableFocusRipple: true,
        size: "small",
    },
    MuiTextField: {
        InputLabelProps: {
            shrink: true,
        },
    },
    MuiCheckbox: {
        disableRipple: true,
        color: "primary",
    },
    MuiRadio: {
        disableRipple: true,
        color: "primary",
    },
    MuiSwitch: {
        color: "primary",
        disableRipple: true,
    },
};

theme.components = Overrides(theme);
theme.customStyles = theme.components.customStyles;

export default responsiveFontSizes(theme);
