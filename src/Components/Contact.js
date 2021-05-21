import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

import hello from '../images/hello.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '20%'
    }
  },
  image: {
    margin: 'auto auto -28px',
    width: '75vw',
  },
  formDiv: {
    border: '2px solid grey',
    padding: 50,
    width: '80%',
    margin: '65px auto',
    borderRadius: 4,
    backgroundColor: '#f9f9f9'
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '55ch',
    },
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 260,
  }
}))

function Contact() {
  const classes = useStyles()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      return setEmailError(true)
    } else setEmailError(false)

    const newContact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    }
    console.log(newContact)
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className={classes.root}>

      <div>
        <figure>
          <img src={hello} alt="neon sign hello" className={classes.image} />
          <small>
            <figcaption>
              Photo by{' '}
              <a href="https://unsplash.com/@drew_beamer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Drew Beamer
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/s/photos/sign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </figcaption>
          </small>
        </figure>
      </div>

      <div className={classes.formDiv}>
      <Typography variant="h5" gutterBottom>
        Please Feel Free To Contact Me:
      </Typography>
      <form noValidate className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="First Name"
          variant="filled"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Last Name"
          variant="filled"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <TextField
          id="filled-basic"
          label="Message"
          variant="filled"
          multiline
          rows={6}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          className={classes.button}
          type="submit"
        >
          Submit
        </Button>
      </form>
      </div>

    </div>
  )
}

export default Contact
