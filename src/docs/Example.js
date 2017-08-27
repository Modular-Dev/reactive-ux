import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
color: ${props => props.theme.fg};
border: 2px solid ${props => props.theme.fg};
background: ${props => props.theme.bg};

font-size: 1em;
margin: 1em;
margin-top: 3%;
padding: 0.25em 1em;
border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
fg: 'palevioletred',
bg: 'white'
};


class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode};
    })
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    return (
      <ThemeProvider theme={theme}>
        <div className="example">
          {description && <h4>{description}</h4>}
          <ExampleComponent />

          <p>
            <Button onClick={this.toggleCode}>
              {showCode ? "Hide" : "Show"} Code
            </Button>
          </p>

          {showCode && <CodeExample>{code}</CodeExample>}
        </div>
        </ThemeProvider>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired
}

export default Example;