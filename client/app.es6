import { render } from 'react-dom'
import Router from './router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './fluidable.less'


injectTapEventPlugin();
render(Router, document.getElementById('main'));