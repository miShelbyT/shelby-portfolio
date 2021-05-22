import React, { useState } from 'react'

import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

import hello from '../images/hello.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '24%'
    }
  },
  image: {
    margin: 'auto auto -28px',
    width: '75vw',
  },
  feelFree: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px'
    }
  },
  formDiv: {
    border: '2px solid grey',
    padding: 50,
    width: '80%',
    margin: '65px auto',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '75vw',
    }
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '55%',
      [theme.breakpoints.down('xs')]: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '75%'
      }
    },
  },
  button: {
    width: 260,
  }
}))

function Contact() {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault()

    const newContact = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
    console.log(newContact)
    setName('')
    setEmail('')
    setSubject('')
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
      <Typography variant="h5" gutterBottom className={classes.feelFree}>
        Please Feel Free To Contact Me:
      </Typography>
      <form noValidate className={classes.form} onSubmit={handleSubmit}>
        <TextField
        className='form-control formInput'
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
        className='form-control formInput'
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        className='form-control formInput'
          id="filled-basic"
          label="Subject"
          variant="filled"
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
        className='form-control formInput'
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
