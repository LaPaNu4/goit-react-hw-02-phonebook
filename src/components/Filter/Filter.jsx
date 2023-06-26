import React from 'react';
import PropTypes from 'prop-types'; 

class Filter extends React.Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <label>
        Filter contacts by name:
        <input type="text" value={filter} onChange={onChange} />
      </label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};