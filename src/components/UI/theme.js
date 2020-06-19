import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
	pallete: {
		primary: {
			main: "#ff2e63",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 650,
			md: 1055,
			lg: 1280,
			xl: 1920,
		},
	},
	spacing: 0,
});
