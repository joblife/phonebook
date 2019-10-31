import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Phonebook Application</h1>
    <p>This is a demo phonebook application, built with:</p>
    <ul>
      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
      <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
            <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            <li><a href='http://www.litedb.org'>LiteDB</a> for persistence (a local NOSQL database similar to MongoDB)</li>
    </ul>
    <p>The structure of the application uses a ReactJS frontend paired with a .NET Web Api backend which queries the LiteDB database.</p>
    <ul>
      <li><a href="/phonebook"><strong>Phonebook View & Search</strong></a></li>
      <li><a href="/add"><strong>Add a Record to the Phonebook</strong></a></li>
    </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        
  </div>
);

export default connect()(Home);
