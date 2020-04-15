import React from 'react';
import { Component } from '../src';

export default {
  title: Component.displayName,
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => <Component {...props} />;
