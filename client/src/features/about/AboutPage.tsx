import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import React from "react";
import agent from "../../app/api/agent";

const AboutPage = () => {
	return (
		<Container>
			<Typography gutterBottom variant="h2">
				{" "}
				Errors for testing purposes
			</Typography>
			<ButtonGroup fullWidth>
				<Button
					variant="contained"
					onClick={() => agent.TestErrors.get400Error()}
				>
					Test 400 Error - bad Request
				</Button>
				<Button
					variant="contained"
					onClick={() => agent.TestErrors.get401Error()}
				>
					Test 401 Error - Unauthorized
				</Button>
				<Button
					variant="contained"
					onClick={() => agent.TestErrors.get404Error()}
				>
					Test 404 Error - NotFound
				</Button>
				<Button
					variant="contained"
					onClick={() => agent.TestErrors.get500Error()}
				>
					Test 500 Error - Server error
				</Button>
				<Button
					variant="contained"
					onClick={() => agent.TestErrors.getValidationError()}
				>
					Validation Error
				</Button>
			</ButtonGroup>
		</Container>
	);
};

export default AboutPage;
