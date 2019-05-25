import * as React from 'react';
import {Navigation} from 'view/templates';
import PropTypes from 'prop-types';
import styles from './styles.scss';


const LINKS = [
  {
    caption: 'Home',
    url: '/'
  }
];

const Page = ({children}) => (
  <React.Fragment>
    <Navigation links={LINKS} />
    <div className={styles.page_body}>
      {children}
    </div>
  </React.Fragment>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]).isRequired
};

export default Page;
