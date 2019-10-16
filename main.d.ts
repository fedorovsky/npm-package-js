import React = require('react');

export interface ComponentProps {
  title: string;
}

export default class Component extends React.Component<ComponentProps> {
  constructor(props: Readonly<ComponentProps>);
}