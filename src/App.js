import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Scroll from './scroll/Scroll'
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route path="/create" ><Create /></Route>
            <Route path="/blogs/:id" ><BlogDetails /></Route>
            <Route path="/scroll" ><Scroll /></Route>
            <Route path="*" ><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
