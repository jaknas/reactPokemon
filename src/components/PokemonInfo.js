import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default ({ pokemon, open, toggle }) => {
	return (
		<div>
			<Modal isOpen={open} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle} className="text-center">
					<strong>{pokemon.name}</strong>{" "}
					<img
						src={pokemon.img}
						style={{ width: 30, height: 30 }}
						alt="miniature render of pokemon"
					/>
				</ModalHeader>
				<ModalBody>
					<ul className="list-group">
						<li className="list-group-item">Height: {pokemon.height}</li>
						<li className="list-group-item">Weight: {pokemon.weight}</li>
						<li className="list-group-item">Candy: {pokemon.candy}</li>
						{pokemon.candy_count ? (
							<li className="list-group-item">
								Candy count: {pokemon.candy_count}
							</li>
						) : null}
						<li className="list-group-item">Egg: {pokemon.egg}</li>
						<li className="list-group-item">
							Spawn chance: {pokemon.spawn_chance}
						</li>
						<li className="list-group-item">
							Average spawns: {pokemon.avg_spawns}
						</li>
						<li className="list-group-item">
							Spawn Time: {pokemon.spawn_time}
						</li>
						<ul className="list-group">
							{Array.isArray(pokemon.multipliers) ? (
								<React.Fragment>
									<strong>Multipliers:</strong>
								</React.Fragment>
							) : null}
							{Array.isArray(pokemon.multipliers)
								? pokemon.multipliers.map(multiplier => (
										<li key={multiplier} className="list-group-item">
											{multiplier}
										</li>
								  ))
								: null}
						</ul>
						<ul className="list-group">
							<strong>Weaknesses:</strong>
							{pokemon.weaknesses.map(weakness => (
								<li key={weakness} className="list-group-item">
									{weakness}
								</li>
							))}
						</ul>
						<ul className="list-group">
							{typeof pokemon.prev_evolution !== "undefined" ? (
								<React.Fragment>
									<strong>Previous Evolutions:</strong>
								</React.Fragment>
							) : null}
							{typeof pokemon.prev_evolution !== "undefined"
								? pokemon.prev_evolution.map(evolution => (
										<li key={evolution.num} className="list-group-item">
											{evolution.name}
										</li>
								  ))
								: null}
						</ul>
						<ul className="list-group">
							{typeof pokemon.next_evolution !== "undefined" ? (
								<React.Fragment>
									<strong>Next Evolutions:</strong>
								</React.Fragment>
							) : null}
							{typeof pokemon.next_evolution !== "undefined"
								? pokemon.next_evolution.map(evolution => (
										<li key={evolution.num} className="list-group-item">
											{evolution.name}
										</li>
								  ))
								: null}
						</ul>
					</ul>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Back
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};
