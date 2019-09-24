import React, {Component} from 'react';
import './style.scss';
import ModeButton   from './ModeButton';
import ColorPicker  from './ColorPicker';

class Toolbar extends Component{
  render(){
    return(
      <div className={`Toolbar ${this.props.className}`}>
        <div className='group'>
          <header>Shapes</header>
          <main>
            <ModeButton mode='circle' icon='circle' />
            <ModeButton mode='square' icon='square' />
          </main>
        </div>
        <div className='group'>
          <header>View</header>
          <main>
            <ColorPicker />
          </main>
        </div>

      </div>
    );
  }
}

export default Toolbar;
