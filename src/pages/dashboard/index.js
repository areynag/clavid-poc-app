import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getUrlList from '../../redux/actions/getUrlList';
import Page from './page';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "https://mfwkweb-api.clarovideo.net//services/cms/level",
            data: {
                "api_version": "v5.86",
                "authpn": "webclient",
                "authpt": "tfg1h3j4k6fd7",
                "format": "json",
                "region": "mexico",
                "device_id": "web",
                "device_category": "web",
                "device_model": "web",
                "device_type": "web",
                "device_manufacturer": "generic",
                "HKS": "9s5qq76r3g6sg4jb90l38us52",
                "isCacheable": "true",
                "node": "gen_accion",
                "domain": "https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F",
                "origin": "https//services/cms/level3A%2F%2Fwww.clarovideo.com%2F",
                "user_id": "22822863"
            }
        };

        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {
            getUrlList,
        } = this.props;

        getUrlList(this.state);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            results,
        } = this.props;

        return (
            <Page
                results={results}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});

const mapDispatchToProps = {
    getUrlList,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
