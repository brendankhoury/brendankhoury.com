import {
	Grid,
} from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
	return (
		<Grid container style={{marginTop: "30px"}}>
			<Grid item md={3}></Grid>
			<Grid item md={6}>
				<Grid container>
					<Grid item md={6}>
                        <ProjectCard name="Zizoto" description={"Full stack AI art generation app available on both the Play Store and App Store"} url="https://zizoto.com" logo="https://zizoto.com/assets/icon.png"/>
					</Grid>
					<Grid item md={3}></Grid>
					<Grid item md={3}></Grid>
					<Grid item md={3}></Grid>
				</Grid>
			</Grid>
			<Grid item md={3}></Grid>
		</Grid>
	);
}
