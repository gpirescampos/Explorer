import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Search } from 'components';

storiesOf('Search', module).add('Search', () => (
  <div style={{ padding: '24px' }}>
    <Search onChange={action('typed')} />
  </div>
));
