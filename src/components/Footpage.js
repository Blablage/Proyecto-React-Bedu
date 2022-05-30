import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white", marginTop: "-50px", marginLeft: '40px' }}>
		StudyCenter
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Contactanos</Heading>
            <FooterLink>Quintana Roo, Mexico</FooterLink>
			<FooterLink href="#">gergarmac@gmail.com</FooterLink>
		</Column>
		<Column>
			<Heading>Redes Sociales</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
