import React from 'react';

import {useSelector} from 'react-redux';

import {ENTERPRISE_TYPES} from 'utils/Constants';

import {SearchItem, Options} from 'components';

import {Container} from './styles';

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
    <Container>
      <Options
        items={ENTERPRISE_TYPES}
        itemsColumns={ITEMS_COLUMNS}
        press={fetchApiOptions}
      />
      <SearchItem fetch={fetchApi} />
    </Container>
  );
};

export default Search;
