import React from 'react';
//React Router
import {Router, Route, Link, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

// /* Dummy Components beginning */
// const PageOne = () => {
//     return <div>PageOne</div>
// };

// const PageTwo = () => {
//     return <div>PageTow</div>
// };

// /* Dummy Components ending */

const App = () => {
    return (
        <div class="ui container">
            <Router history={history}>
                <Header />
                {/* <Route path="/" exact component={PageOne}/>
                <Route path="/pagetwo" component={PageTwo}/> */}
                <Switch>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                    <Route path="/streams/:id" exact component={StreamShow}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;

/*
React Router Notes 

React Router does not care about base url. 
For Eg: localhost:3000/    RR cares about /
        localhost:3000/pageone   RR cares about /pageone
        localhost:3000/posts/5   RR cares about /posts/5
        twitter.com/tweets/new   RR cares about /tweets/new

BrowserRouter is a component
Route is a component 
A single path(For Eg: '/') can be matched by different Routes inside of our application

<Route path="/" exact component={PageOne}/> 
If we remove the 'exact' keyword from the above Component we see that PageOne is rendered  when the path is 'localhost:3000/pathtwo'. 

extractedPath(path that user enters or navigates to).contains(All the paths defined in the Route) //It's like checking whether a given string contains another string.

SideNote: The 'exact' prop in the above component is a short form for exact={true}

Note: Never use the anchor tag for navigation. Use the 'Link' component of React Router 

<Link to = "/pageTwo">Navigate to Page Two</Link>

The different router types are:
1. BrowserRouter: Uses everything after the TLD(Top Level Domain)(.com, .net)or port as the 'path' Eg: localhost:3000/pagetwo
2. HashRouter: Uses everything after a # as the 'path' Eg: localhost:3000/#/pagetwo
3. MemoryRouter: Doesn't use the URL to track navigation Eg: localhost:3000/



*/