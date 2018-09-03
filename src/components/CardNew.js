import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import PokemonType from './PokemonType';

const CardNew = ({ pokemon }) => (
  <Row>
    <Col>
      <Card
        body
        style={{
          marginBottom: '15px',
          marginTop: '15px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CardImg
          top
          width="100%"
          src={pokemon.img}
          alt="Card image cap"
          style={{ height: '200px', width: '200px' }}
        />
        <CardBody style={{ paddingBottom: '0px', maxWidth: '210px' }}>
          <CardTitle
            style={{
              textAlign: 'center',
              marginBottom: '5px',
            }}
          >
            <strong style={{ fontWeight: 600 }}>
              #{pokemon.num} {pokemon.name}
            </strong>
          </CardTitle>
          <PokemonType pokemon={pokemon} />
        </CardBody>
      </Card>
    </Col>
  </Row>
);

CardNew.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default CardNew;
