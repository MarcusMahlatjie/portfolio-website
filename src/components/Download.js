import React from "react";
import cvdownload from "../assets/downloads/cvdownload.pdf";

export const Download = () => {
	const onButtonClick = () => {
		fetch(cvdownload).then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Marcus Mahlatjie CV.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center className="project" >				
				<h1>Curriculum Vitae</h1>
				<button className="download" onClick={onButtonClick}>
					Download
				</button>			
			</center>
		</>
	);
};