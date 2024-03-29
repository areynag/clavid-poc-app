import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../../components/appBar';
import './styles.css';

function Page(props) {
    const {
        results,
        goTo,
    } = props;

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="dashboard-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                            className="card-container"
                        >
                            <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                </CardActionArea>
                            </Card>
                    </div>)
                }
            </div>
        </Fragment>
    );
}

export default Page;
