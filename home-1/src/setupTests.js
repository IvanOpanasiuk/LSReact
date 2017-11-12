import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

let App = (prop) => (
    <div className="App">
        <footer>
            <p>
                Loftschool
            </p>
        </footer>
    </div>
)
 
export default App;
