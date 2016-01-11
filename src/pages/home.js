/**
 * Created by alexbol on 1/11/2016.
 */
import { createStore } from '../../lib/redux.min';
import { reducer } from '../store/reducer';

const store = createStore(reducer);

export class Home extends React.Component {
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
                <h1>Home page component</h1>
            </div>
        )
    }
}
