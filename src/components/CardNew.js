import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Row,
	Col
} from "reactstrap";
import PokemonType from "./PokemonType";

const CardNew = ({ pokemon }) => {
	const state = {
		open: false
	};
	const toggle = () => {
		this.setState({
			open: !state.open
		});
	};
	return (
		<Row>
			<Col col-auto>
				<Card
					body
					style={{
						marginBottom: "15px",
						marginTop: "15px",
						display: "flex",
						alignItems: "center"
					}}
					onClick={toggle}
				>
					<CardImg
						top
						width="100%"
						src={pokemon.img}
						alt="Card image cap"
						style={{ height: "200px", width: "200px" }}
					/>
					<CardBody style={{ paddingBottom: "0px", maxWidth: "210px" }}>
						<CardTitle
							style={{
								textAlign: "center",
								marginBottom: "5px"
							}}
						>
							<strong style={{ fontWeight: 600 }}>
								#{pokemon.num} {pokemon.name}
							</strong>
						</CardTitle>
						<CardText>
							<PokemonType pokemon={pokemon} />
						</CardText>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default CardNew;
