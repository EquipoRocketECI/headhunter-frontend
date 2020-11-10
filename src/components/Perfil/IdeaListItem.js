import React from 'react';
import {
    Typography, Card,
    CardContent, CardActions, Button, Grid,
    Stepper, Step, StepLabel, StepConnector, LinearProgress
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Perfil.css';

import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';

import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

function getSteps() {
    return ['En Gestación', 'Destacada', 'Consolidada'];
}

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ChildFriendlyIcon />,
        2: <ImportantDevicesIcon />,
        3: <CheckCircleIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const classes = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 10,
        height: 10
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

export default class IdeaListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.steps = getSteps();
    }

    render() {
        return (

            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    {this.props.nombre}
                                </Grid>
                                <Grid item >
                                    {this.props.calificacion == 0 ? "(Sin calificaciones)" : this.props.calificacion.toFixed(1)}
                                    <StarIcon style={{ color: yellow[500] }} />

                                </Grid>
                            </Grid>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.props.categoria}
                        </Typography>
                        <Stepper alternativeLabel activeStep={this.props.activeStep} connector={<ColorlibConnector />}>
                            {this.steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <div style={{ display: this.props.pequenasdonaciones || this.props.grandesinversiones ? 'block' : 'none' }}>
                            <Typography variant="body2" gutterBottom>
                                Recaudado ${this.props.montoRecolectado} de  ${this.props.montoLimite} ({this.props.porcentaje.toFixed(2)}%)
                                        <br />

                            </Typography>
                            <BorderLinearProgress variant="determinate" value={this.props.porcentaje} />
                        </div>

                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={"/idea?id=" + this.props.id}>
                            Ver Más
                                </Button>
                    </CardActions>
                </div>

            </Card>
        )
    }
}