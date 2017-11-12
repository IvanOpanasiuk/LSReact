import {onfigure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

class App extends Component {
    state = {}
    
    render() { 
        return ( <div>HEllo</div> )
    }
}
 
export default App;
