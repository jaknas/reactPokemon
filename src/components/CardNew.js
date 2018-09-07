import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import PokemonMap from './PokemonMap';
import PokemonInfo from './PokemonInfo';

class CardNew extends React.Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { pokemon } = this.props;
    const { open } = this.state;
    return (
      <Row>
        <Col>
          <Card
            body
            style={{ cursor: 'pointer' }}
            className="d-flex align-items-center m-3"
            onClick={this.toggle}
          >
            <CardImg
              top
              width="100%"
              src={pokemon.img}
              alt="rendered pokemon"
              style={{ height: '200px', width: '200px' }}
            />
            <CardBody style={{ paddingBottom: '0px', maxWidth: '210px' }}>
              <CardTitle className="text-center" style={{ marginBottom: '5px' }}>
                <strong style={{ fontWeight: 600 }}>
                  #{pokemon.num} {pokemon.name}
                </strong>
              </CardTitle>
              <div className="text-center">
                <PokemonMap variant={pokemon.type} groupBy="span" title="" />
              </div>
              {open ? <PokemonInfo id={pokemon.id} open={open} toggle={this.toggle} /> : null}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

CardNew.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default CardNew;
