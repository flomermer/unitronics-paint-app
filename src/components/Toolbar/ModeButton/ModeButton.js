import React from 'react';
import './style.scss';
import Icon  from '../../Misc/Icon';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {switchMode}                 from '../../../actions/paintMode';

const ModeButton = ({mode, icon, switchMode, paintMode, paintColor}) => {
  const isActive = paintMode===mode;
  return (
    <div className={`ModeButton ${isActive && 'active'}`}>
      <Icon faType='far' icon={icon} size='2x' onClick={() => switchMode(mode)}
            color={isActive && paintColor} 
      />
    </div>
  );
}

const mapStateToProps = ({paintMode, paintColor}) => ({paintMode, paintColor});
const mapDispatchToProps = (dispatch) => (bindActionCreators({switchMode}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ModeButton);
