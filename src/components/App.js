import React from 'react';
import '../styles/styles.scss';
import "core-js/stable";
import "regenerator-runtime/runtime";


class App extends React.Component {
    // constructor needed only if you need to initialize state or bind functions
    // constructor is called before it mounts
    constructor() {
      // - is needed only if you need to access this.props in the constructor
      super()
      this.state = {
        data: null
      };
    }
    async callServer() {
        const response = await fetch('http://localhost:3000/express_backend');
        const body = await response.json();
        debugger;

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }
    /* 
    - use: Can prepare config to state before rendering.
    - has access to:
    - dont do: 
    - notes: called once. Can call setState safely here.  Good to make fetch calls
    */
    UNSAFE_componentWillMount() {
        console.log('%c--->componentWillMount:', 'color:yellow');
        debugger;
    }
    /* 
    - use: If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, 
    or send AJAX requests, perform those operations in this method.
    - has access to: Has access to all child references in the DOM/UI. Has access to this.props
    - dont do: 
    - notes: 
    */
    componentDidMount() {
        console.log('%c--->componentDidMount:', 'color:yellow');
        // const body = this.callServer();
        this.callServer()
        .then(resp => this.setState({ data: resp.express }))
        .catch(err => console.log(err));
        debugger;

    }
    /* 
    - use: 
    - has access to: prevProps, nextProps
    - dont do: 
    - notes: this.setState here will not cause a re-render
    */
    UNSAFE_componentWillReceiveProps(prevProps, nextProps) {
        console.log('%c--->componentWillReceiveProps:', 'color:lime');
        console.log('%ccprevProps:', 'color:hotpink', prevProps);
        console.log('%cnextProps:', 'color:hotpink', nextProps);
    }
    /* 
    - use: 
    - has access to: nextProps, nextState
    - dont do: 
    - notes: use this when you don't want to re-render based off of newProps/ newState
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('%c--->shouldComponentUpdate:', 'color:lime');
        return true;
    }
    /* 
    - use: 
    - has access to: snapshot - only if implementing getSnapshotBeforeUpdate
    - dont do: 
    - notes: do not do this.setState/ dispatch any asnyc calls
    - will not execute if shouldComponentUpdate returns false
    */
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('%c--->componentWillUpdate:', 'color:lime');
        console.log('%cnextProps:', 'color:hotpink', nextProps);
        console.log('%cthis.state:', 'color:hotpink', this.state);
        console.log('%cnextState:', 'color:hotpink', nextState);
    }
    /* 
    - use: 
    - has access to: prevProps, prevState, snapshot
    - dont do: 
    - notes: can do a setState/ dispatch async calls 
    but you _have_ to wrap it in condition or else start an infinite loop
    */
    componentDidUpdate(prevProps, prevState) {
        console.log('%c--->componentDidUpdate:', 'color:lime');
        console.log('%ccomponentDidUpdate- prevProps:', 'color:aqua', prevProps);
        console.log('%ccomponentDidUpdate- prevState', 'color:aqua', prevState);
    }
    /*  
    - use: before dom component is destroyed. Use to clean up any dom nods or eventListeneers
    - has access to:
    - dont do: 
    - notes: can't use setState
    */
    componentWillUnmount() {
        console.log('%c--->componentWillUnmount:', 'color:yellow');
    }

    /* 
    - use: 
    - has access to:
    - dont do: 
    - notes:
    */
   render() {
       const { data } = this.state;
       console.log('%crender():', 'color:orange', data);
    return (
        <div id="app">
             <h1>Hello, app~!!!</h1>
             <div>{data}</div>
        </div>
    );
}
    /** LifeCycle steps for Mounting
     * componentWillMount
     * render
     * componentDidMount
     */

     /** LifeCycle methods for Updating
     * componentWillReceiveProps
     * shouldComponentUpdate
     * componentWillUpdate
     * render
     * componentDidUpdate
     */

    /*** React 17 methods ***/
    /* 
    - use: called right before mutations are made (e.g. before the DOM is updated). 
    The return value for this lifecycle will be passed as the third parameter to componentDidUpdate. (This lifecycle isn’t often needed, but can be useful in cases like manually preserving scroll position during rerenders.)
    has access to:
    - dont do: 
    - notes:
    */
    // getDerivedState() {

    // }
    // /* 
    // - use: is invoked right before the most recently rendered output is committed
    // has access to: prevProps, prevState
    // - dont do: 
    // - notes: don't really use this a whole lot. More for special cases like doing something to the DOM to pass to compnentDidUpdate
    //  before componentDidUpdate fires
    // */
    // getSnapshotBeforeUpdate(prevProps, prevState) {

    // }


}
export default App;