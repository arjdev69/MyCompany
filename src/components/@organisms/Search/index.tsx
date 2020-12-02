import React from 'react';
import * as UI from 'react-native';

import {useSelector} from 'react-redux';

import {Box, SearchItem} from 'components';

export interface Props {
  fetch: any;
}

const Search: React.FC<Props> = _props => {
  const fetchApi = (search: any) => {
    _props.fetch({name: search});
  };
  return (
    <Box styles={{}}>
      <SearchItem fetch={fetchApi} />
    </Box>
  );
};

export default Search;
