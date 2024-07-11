'use client'

import ContactUsForm from '@/components/ContactUsForm/ContactUsForm'
import axios from 'axios'
import React, { useState } from 'react'

const GetInTouch = () => {
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
    setButton('Please Wait')
    setBtnDisabled(true)
    if (validate()) {
      console.log('Validated')
      try {
        const response = await axios.post(
          `https://docs.rie2025.com/wp-json/contact-form-7/v1/contact-forms/12/feedback`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response)

        if (response.data.status === 'mail_sent') {
          console.log(response.data.status)
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
    } else {
      setButton('SEND A MESSAGE')
      setBtnDisabled(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row mb-3 overflow-hidden">
      <div
        className="w-full md:w-1/2 bg-cover bg-center bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/getInTouch.png')]"
        data-aos="fade-right"
      >
        <div className="h-96 md:h-[684px]"></div>
      </div>
      <div
        className="w-full md:w-1/2 bg-[#232526] flex items-center"
        data-aos="fade-left"
      >
        <div className="p-6 md:ps-32 md:text-white flex flex-col items-start gap-4">
          <h3 className="text-3xl md:text-5xl text-white font-semibold">
            Get in touch
          </h3>
          <p className="text-base md:text-xl text-white w-full md:w-4/6">
            Burning question or request? We endeavor to answer all inquiries
            within 24 hours on business days.
          </p>

          {/* <form className="w-full md:w-3/4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                />
                {errors.firstName && (
                  <span className="text-red-500">{errors.firstName}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                />
                {errors.lastName && (
                  <span className="text-red-500">{errors.lastName}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">{errors.message}</span>
                )}
              </div>
              <button
                className="bg-[#4257E1] text-white px-6 py-3 w-full md:w-auto"
                type="submit"
              >
                SEND A MESSAGE
              </button>
            </div>
          </form> */}
          <ContactUsForm
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            button={button}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
