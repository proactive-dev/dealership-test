import _ from 'lodash';

import { useDealershipInventoryActivityQuery as useBaseQuery } from 'generated/graphql';



export interface IDealership {
  id: string;
  name: string;
  address: string;
  logoUrl: string;
}

export interface IData {
  dealerships: IDealership[];
}

export function useDealershipInventoryActivityQuery() {
  const tuple = useBaseQuery();

  const data: IData = {
    dealerships: []
  };
  if (tuple.data?.dealerships) {
    data.dealerships = _.map(tuple.data.dealerships, (dealership): IDealership => ({
      id: dealership.id,
      name: dealership.name,
      logoUrl: dealership.logoUrl,
      address: dealership.address
    }));
  }

  return {
    ...tuple,
    data
  };
}
