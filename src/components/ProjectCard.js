import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Box,
	Avatar,
	CardActions,
	Button,
	Paper,
} from "@mui/material";

const ProjectCard = ({ name, url, description, logo }) => {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<CardContent>
					<Typography variant="h5">{name}</Typography>
					<Typography variant="body2">{description}</Typography>
				</CardContent>
				<Box m={2}>
					<Paper elevation={6}>
						<Avatar
							src={logo}
							alt={name}
							sx={{ width: 56, height: 56, borderRadius: "50%" }}
						/>
					</Paper>
				</Box>
			</Box>
			<CardActions>
				<Button size="small" href={url}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
