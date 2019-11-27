import React from 'react';
import styles from './Tables.scss';

import { Link } from 'react-router-dom';

const Tables = () => 
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName="active">
      Kitchen
    </Link>
  </div>;


export default Tables;