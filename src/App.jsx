import React from 'react'
import Tab from './components/Tab'
import Tabs from './components/Tabs'

const App = () => (
  <div>
    <Tabs>
      <Tab title="Tab 1">Some text 1</Tab>
      <Tab title="Tab 2">Some text 2</Tab>
      <Tab title="Tab 3">Some text 3</Tab>
    </Tabs>
  </div>
);

export default App;
