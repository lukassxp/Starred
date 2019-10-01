import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Repo({ navigation }) {
  const repo = navigation.getParam('repo');

  return <Browser source={{ uri: repo.html_url }} />;
}

Repo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repo.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repo').name,
});
