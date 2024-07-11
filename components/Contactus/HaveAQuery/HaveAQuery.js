'use client'
import React, { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import ContactUsForm from '@/components/ContactUsForm/ContactUsForm'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const HaveAQuery = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [error, setError] = useState()
  const [successMessage, setSuccessMessage] = useState()
  const [button, setButton] = useState('SEND A MESSAGE')
  const [disabled, setBtnDisabled] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6LdZwg0qAAAAAKnGl1OvKWrxbT28GSMhPfTHekAQ'
    script.async = true
    document.body.appendChild(script)

    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => {
      document.body.removeChild(script)
      clearTimeout(timeout)
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.firstName) tempErrors.firstName = 'First Name is required'
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required'
    if (!formData.email) tempErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Email is invalid'
    if (!formData.message) tempErrors.message = 'Message is required'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!recaptchaToken) {
    //   setError('Please verify that you are not a robot.')
    //   return
    // }

    setButton('Please Wait')
    setBtnDisabled(true)

    if (validate()) {
      try {
        // Simulating form submission

        // const token = await new Promise((resolve, reject) => {
        //   window.grecaptcha
        //     .execute('6LdZwg0qAAAAABQII1HBE__7x1zk7emdMgtQqNS2', {
        //       action: 'submit',
        //     })
        //     .then(resolve)
        //     .catch(reject)
        // })

        setTimeout(async () => {
          // Example of handling form submission with Axios
          try {
            const response = await axios.post(
              'https://docs.rie2025.com/wp-json/contact-form-7/v1/contact-forms/12/feedback',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            )

            if (response.data.status === 'mail_sent') {
              setSuccessMessage('Thank you for your submission!')
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
              })
              setButton('SEND A MESSAGE')
              setBtnDisabled(false)
            } else {
              setError('An error occurred. Please try again.')
              setBtnDisabled(false)
            }
          } catch (err) {
            setError('An error occurred. Please try again.')
            setBtnDisabled(false)
          }
        }, 1500) // Simulating delay for demo purposes
      } catch (err) {
        setError('An error occurred. Please try again.')
        setBtnDisabled(false)
      }
    } else {
      setButton('SEND A MESSAGE')
      setBtnDisabled(false)
    }
  }

  return (
    <div className="bg-[#E6E6E6] pt-12 pb-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-0">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] mb-8 text-center md:text-left">
          Have A Query?
        </h3>
        {successMessage && <div>{successMessage}</div>}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-4/6">
            <ContactUsForm
              handleSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
              errors={errors}
              button={button}
              disabled={disabled}
            />
          </div>
          <div
            className="flex flex-col gap-8 w-full md:w-2/5"
            data-aos="fade-left"
          >
            {/* <div className="bg-white p-3 flex flex-col gap-3 border-b-4 border-[#4257E1]">
              <Image
                src="/contactUs/image02.svg"
                width={43}
                height={43}
                alt=""
              />
              <h3 className="font-semibold text-2xl md:text-3xl text-[#232526]">
                Chat with us
              </h3>
              <p className="text-base md:text-lg text-[#232526]">
                Please fill out our contact form and our support representative
                will get in touch with you shortly.
              </p>
            </div> */}
            <Link
              href="https://maps.google.com/?q=12.971849,77.613235"
              target="_blank"
            >
              <div className="bg-white p-3 flex flex-col gap-3 border-b-4 group border-[#4257E1] hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/contactUs/image03.svg"
                    width={43}
                    height={43}
                    alt="Location Icon"
                    className="transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#232526]">
                  Location
                </h3>
                <p className="text-base md:text-lg text-[#232526]">
                  Registered Address: <br />
                  ‘Casa Fina’, No 5, Primrose Road, <br />
                  Bangalore -560025, Karnataka
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>
    </div>
  )
}

export default HaveAQuery
