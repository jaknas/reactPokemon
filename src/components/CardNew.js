import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import PokemonType from './PokemonType';
import PokemonInfo from './PokemonInfo';

// const CardNew = ({ pokemon }) => (
//   <Row>
//     <Col>
//       <Card
//         body
//         style={{
//           marginBottom: '15px',
//           marginTop: '15px',
//           display: 'flex',
//           alignItems: 'center',
//         }}
//         onClick={toggle}
//       >
//         <CardImg
//           top
//           width="100%"
//           src={pokemon.img}
//           alt="rendered pokemon"
//           style={{ height: '200px', width: '200px' }}
//         />
//         <CardBody style={{ paddingBottom: '0px', maxWidth: '210px' }}>
//           <CardTitle
//             style={{
//               textAlign: 'center',
//               marginBottom: '5px',
//             }}
//           >
//             <strong style={{ fontWeight: 600 }}>
//               #{pokemon.num} {pokemon.name}
//             </strong>
//           </CardTitle>
//           <PokemonType pokemon={pokemon} />
//         </CardBody>
//       </Card>
//     </Col>
//   </Row>
// );

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
            style={{
              marginBottom: '15px',
              marginTop: '15px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
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
              <div className="text-center">
                <PokemonType variant={pokemon.type} group="span" />
              </div>
              {open ? <PokemonInfo pokemon={pokemon} open={open} toggle={this.toggle} /> : null}
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
