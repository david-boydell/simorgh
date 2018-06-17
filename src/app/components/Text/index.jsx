import React from 'react';
import propTypes from 'prop-types';

const Text = ({ blocks }) =>
  blocks.map(({ blockId, model: paragraphModel }) => (
    <p key={blockId}>{paragraphModel.text}</p>
  ));

Text.propTypes = {
  blocks: propTypes.arrayOf(
    propTypes.shape({
      model: propTypes.shape({
        text: propTypes.string,
      }),
    }),
  ),
};

Text.defaultProps = {
  blocks: [],
};

export default Text;
