import React from "react";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SocialsChips() {
	return (
		<div
			sx={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				listStyle: "none",
				padding: "12px",
				margin: 0,
			}}>
			<Chip
				color="primary"
				icon={<GitHubIcon />}
				label="GitHub"
				clickable
				component="a"
				href="https://github.com/brendankhoury"
				sx={{ margin: "15px" }}
			/>
			<Chip
				color="primary"
				icon={<LinkedInIcon />}
				label="LinkedIn"
				clickable
				component="a"
				href="https://linkedin.com/in/brendan-khoury"
				sx={{ margin: "15px" }}
			/>

			<Chip
				color="primary"
				icon={<TwitterIcon />}
				label="Twitter"
				clickable
				component="a"
				href="https://twitter.com/brendankhoury"
				sx={{ margin: "15px" }}
			/>

			<Chip
				color="primary"
				icon={
					<img
						src="/devpost.svg"
						alt="Devpost"
						width={25}
						height={25}
					/>
				}
				label="Devpost"
				clickable
				component="a"
				href="https://devpost.com/brendankhoury"
				sx={{ margin: "15px" }}
			/>

			<Chip
				color="primary"
				icon={
					<img
						src="/producthunt.svg"
						alt="Devpost"
						width={25}
						height={25}
					/>
				}
				label="ProductHunt"
				clickable
				component="a"
				href="https://producthunt.com/@brendan_khoury"
				sx={{ margin: "15px" }}
			/>
		</div>
	);
}
