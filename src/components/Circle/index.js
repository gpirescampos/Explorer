import React from 'react';
import PropTypes from 'prop-types';
import styles from './Circle.module.scss';

import { Text } from 'components';

const Circle = props => {
  let { type, input, size, color, textColor, textStyle = 'H2' } = props;

  if (type === 'image' && input === '') {
    input =
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  }

  return (
    <div className={`${styles.circle} ${styles[color]} ${styles[size]}`}>
      {type === 'text' ? (
        <div className={`${styles.text}`}>
          <Text color={textColor} style={textStyle}>
            {input}
          </Text>
        </div>
      ) : (
        <img className={`${styles.img}`} src={input} alt="circle" />
      )}
    </div>
  );
};

Circle.propTypes = {
  type: PropTypes.oneOf(['text', 'image']),
  input: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['purple', 'blue', 'orange', 'green', 'red', 'white']),
  textColor: PropTypes.string,
  textStyle: PropTypes.string
};

Circle.defaultProps = {
  type: 'text',
  input: '',
  size: 'medium',
  color: 'white',
  textColor: 'black',
  textStyle: 'H2'
};

export default Circle;
