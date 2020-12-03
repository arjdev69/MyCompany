import React from 'react';

import {useSelector} from 'react-redux';

import {Box, SearchItem, Options} from 'components';
import {ENTERPRISE_TYPES} from 'utils/Constants';

export interface Props {
  fetch: any;
}

const Search: React.FC<Props> = _props => {
  const {filter} = useSelector((state: any) => state.Company);

  const fetchApi = (search: any) => {
    _props.fetch({name: search, types: filter.types});
  };

  const fetchApiOptions = (value: any) => {
    _props.fetch({name: filter.name, types: value});
  };

  const ITEMS_COLUMNS = {
    label: 'enterprise_type_name',
    selectedID: 'id',
  };

  return (
    <Box styles={{}}>
      <SearchItem fetch={fetchApi} />
      <Options
        items={ENTERPRISE_TYPES}
        itemsColumns={ITEMS_COLUMNS}
        press={fetchApiOptions}
      />
    </Box>
  );
};

export default Search;
