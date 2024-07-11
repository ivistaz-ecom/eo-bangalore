import axios from 'axios'

export default async function handler(req, res) {
  const { token } = req.body

  const secret = '6LdZwg0qAAAAAKnGl1OvKWrxbT28GSMhPfTHekAQ'
  //const token = "6LdZwg0qAAAAABQII1HBE__7x1zk7emdMgtQqNS2"

  if (!token) {
    return res.status(400).json({ error: 'Token is missing' })
  }

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`

  try {
    const response = await axios.post(url)
    const data = response.data

    if (data.success) {
      res.status(200).json({ success: true })
    } else {
      res.status(400).json({ success: false, error: data['error-codes'] })
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}
