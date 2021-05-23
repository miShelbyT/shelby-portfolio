import React from 'react'

import { useForm } from 'react-hook-form'

import * as emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

import hello from '../images/hello.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      width: '100vw',
    },
  },
  image: {
    margin: 'auto auto -28px',
    maxHeight: '450px',
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 -28px',
      width: '432px'
    }
  },
  feelFree: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  formDiv: {
    border: '2px solid grey',
    padding: 50,
    width: '80%',
    height: '700px',
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
    },
    [theme.breakpoints.up('sm')]: {
      width: '80vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '800px',
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'left',
    '& > *': {
      margin: theme.spacing(1),
      width: '55%',
      [theme.breakpoints.down('xs')]: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '75%',
      },
    },
  },
  error: {
    fontSize: '14px',
    color: '#FF0000',
    lineHeight: 1,
  },
  button: {
    width: 260,
    marginTop: theme.spacing(3)
  },
}))

function Contact() {
  const classes = useStyles()

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };
      await emailjs.send(
        process.env.REACT_APP_serviceID,
        process.env.REACT_APP_templateID,
        templateParams,
        process.env.REACT_APP_USERID
      );
      reset();
      toastifySuccess()
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <figure>
          <img src={hello} alt="neon sign hello" className={`${classes.image} fade-in-image`} />
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
        <form
          noValidate
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name">Name<sup>*</sup> </label>
          <input
            type="text"
            label="Name"
            name="name"
            id="name"
            {...register('name', { required: "Name is required 🤷🏻‍♀️" })}
            // onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <label className={classes.error}>{errors.name.message}</label>
          )}

          <label htmlFor="email">Email<sup>*</sup> </label>
          <input
            type="text"
            label="Email"
            name="email"
            id="email"
            {...register('email', { required: "Email is required 👋" })}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <label className={classes.error}>{errors.email.message}</label>
          )}

          <label htmlFor="subject">Subject<sup>*</sup> </label>
          <input
            type="text"
            label="Subject"
            name="subject"
            id="subject"
            {...register('subject', { required: "Subject is required 😉" })}
            // onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && (
            <label className={classes.error}>{errors.subject.message}</label>
          )}

          <label htmlFor="Message">Message<sup>*</sup> </label>
          <textarea
            label="Message"
            name="message"
            id="message"
            rows="6"
            {...register('message', { required: "Message is required 😎" })}
            // onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <label className={classes.error}>{errors.message.message}</label>
          )}

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
        <ToastContainer />
      </div>
    </div>
  )
}

export default Contact
