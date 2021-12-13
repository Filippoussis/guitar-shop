import PropTypes from 'prop-types';

const guitarProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  article: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  popular: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
});

export {
  guitarProp,
};
