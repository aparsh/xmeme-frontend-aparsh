import React from 'react';
import { CircularProgress } from "@material-ui/core"
import MemeCard from "./MemeCard";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    meme: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    list: {
        listStyle: "none",
    },
}));


const newColor = () => {
    var newColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return newColorCode;
}

export default function MemeList(props) {
    const { error, isLoaded, memes } = props;
    const classes = useStyles();
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div><CircularProgress /></div>;
    } else {
        return (
            <Container component="main" fixed>
                <div className={classes.paper}>
                    <ul className={classes.list}>
                        {memes.map(meme => (
                            <li key={meme.id} className={classes.meme}>
                                <MemeCard   meme={meme}
                                            newColorCode={newColor}  />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        );
    }
}