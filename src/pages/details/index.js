import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {
    componentDidMount() {
        const {
            match: { params: { itemId } },
            findCurrentItem,
        } = this.props;
        findCurrentItem(itemId);
    }

    render() {
        const {
            currentItem,
        } = this.props;

        return (
            <Page
                currentItem={currentItem}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
    currentItem: state.currentItem,
});

const mapDispatchToProps = {
    findCurrentItem,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);
