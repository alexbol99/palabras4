/**
 * Created by alexbol on 1/10/2016.
 */
import { createStore } from '../lib/redux.min';
import { reducer } from './store/reducer';

const store = createStore(reducer);

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>App component</h1>
            </div>
        )
    }
}

/*
 <ReactRedux.Provider store={store}>
 <App />
 </ReactRedux.Provider>,
 document.getElementById('app')
 */

//App.contextTypes = {
//    store: React.PropTypes.object
//};
