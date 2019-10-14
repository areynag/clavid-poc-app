import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Autocomplete from '../autocomplete';
import './styles.css';

function Comp(props) {
    const {
        text,
        path,
        suggestions,
        onChangeText,
        onChangeSelection,
        goTo,
        
    } = props;
    
    return (
        <AppBar position="static">
            <Toolbar className="appbar">
                {path!=='/dashboard'?
                    <IconButton
                        color="inherit"
                        onClick={() => goTo('/dashboard')}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    :<div />
                }
                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
                <div />
            </Toolbar>
        </AppBar>
    );
}

export default Comp;
