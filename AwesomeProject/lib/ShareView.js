'use strict';
 import React from 'react';
 import{
  requireNativeComponent,
 } from 'react-native';
// import PropTypes from 'prop-types';


var iface = {
  name: 'ShareView',
  // propTypes: {
  //   url: PropTypes.string,
  //   html: PropTypes.string,
  // },

};

module.exports = requireNativeComponent('ShareModule');
