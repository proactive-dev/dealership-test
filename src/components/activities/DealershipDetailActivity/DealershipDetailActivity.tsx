import * as React from 'react';
import _ from 'lodash';

import {
  useParams
} from 'react-router-dom';

import * as dataService from './dataService';

const styles = require('./DealershipDetailActivity.module.css');



export const DealershipDetailActivity: React.FC = props => {
  const {id} = useParams();
  const queryTuple = dataService.useDealershipDetailActivityQuery(id);


  return (
    <div className={styles.container}>
      Dealership Detail Activity

      {!queryTuple.loading && queryTuple.data.dealership &&
          <div className={styles.vehicle}>
            {queryTuple.data.dealership.name}<br/>
            {queryTuple.data.dealership.id}<br/>
            {queryTuple.data.dealership.address}<br/>
            {queryTuple.data.dealership.logoUrl}<br/>
            {
              _.map(queryTuple.data.dealership.vehicles, vehicle => (
                <div>
                  {vehicle.name}<br/>
                  {vehicle.id}<br/>
                  {vehicle.address}<br/>
                  {vehicle.imageUrl}<br/>
                  {vehicle.type.displayName}
                </div>
              ))}
            }
          </div>
        }
    </div>
  );
};
