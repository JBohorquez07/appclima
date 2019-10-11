import React from 'react';
import PropTypes from 'prop-types';



const Header = (props) => {
    return(
     <h3 id="titulo">{props.titulo}</h3>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;