import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comp from './comp';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class AppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    onChangeText(text) {
        this.setState({ text });

        this.props.findSuggestions(text);
    }

    onChangeSelection(text) {
        const {
            findResults,
            match,
            history,
        } = this.props;

        this.setState({ text });

        findResults(text);

        if (match.path !== '/dashboard') {
            history.push('/dashboard');
        }
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            match: { path },
        } = this.props;

        const {
            text,
        } = this.state;

        const {
            suggestions,
        } = this.props;

        return (
            <Comp
                path={path}
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    suggestions: state.suggestions,
});

const mapDispatchToProps = {
    findSuggestions,
    findResults,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AppBar)
);
