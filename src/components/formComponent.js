import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import config from "../config";

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormComponent(props) {
  const { } = props;
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [caption, setCaption] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleChange = event => {
    console.log(event.target.name);
    let target = event.target.name;
    if (target == "name") {
      setName(event.target.value);
    }
    else if (target == "caption") {
      setCaption(event.target.value);
    }
    else {
      setUrl(event.target.value);
    }

  };

  const postRequest = meme => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meme)
    };

    fetch(config.SERVER_URL, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleSubmit = event => {

    let newMeme = {
      name: name,
      caption: caption,
      url: url
    }
    console.log(newMeme);
    postRequest(newMeme);
    props.addMeme(newMeme);

    setCaption("");
    setName("");
    setUrl("");
    event.preventDefault();
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            value={name}
            name="name"
            onChange={handleChange}
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={caption}
            onChange={handleChange}
            name="caption"
            label="Caption"
            id="caption"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={url}
            onChange={handleChange}
            name="url"
            label="Url"
            id="url"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Post
          </Button>
        </form>
      </div>
    </Container>
  );
}