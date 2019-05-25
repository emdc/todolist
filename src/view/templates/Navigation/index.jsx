import * as React from 'react';
import Link from './Link';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';
import styles from './styles.scss';
import {withRouter} from 'react-router-dom';


class Navigation extends React.Component {
  constructor (props) {
    super(props);

    bindAll(this, [
      'onLinkClick'
    ]);
  }

  onLinkClick (url) {
    this.props.history.push(url);
  }

  render () {
    const {links, location} = this.props;

    return (
      <nav className={styles.navigation}>
        <div className={styles.brand}>
          <a href="/">{'ToDo'}</a>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              click={this.onLinkClick}
              key={link.url}
              link={link}
              location={location}
            />
          ))}
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Navigation);
