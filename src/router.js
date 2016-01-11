/**
 * Created by alexbol on 1/10/2016.
 */
import { Home } from './pages/home';
import { Dictionary } from './pages/dictionary';
import { Login } from './pages/login';
import { browserHistory } from '../lib/History.min';

ReactDOM.render(
    <ReactRouter.Router history={browserHistory}>
        <ReactRouter.Route path="/" component={Home} />
        <ReactRouter.Route path="login" component={Login} />
        <ReactRouter.Route path="dictionary/:id" component={Dictionary} />
    </ReactRouter.Router>,
    document.getElementById('app')
);

