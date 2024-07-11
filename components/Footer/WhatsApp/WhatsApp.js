'use client'

import React, { useEffect } from 'react'

const WhatsApp = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(function (w, d, s, c, r, a, m) {
        w['KiwiObject'] = r
        w[r] =
          w[r] ||
          function () {
            ;(w[r].q = w[r].q || []).push(arguments)
          }
        w[r].l = 1 * new Date()
        a = d.createElement(s)
        m = d.getElementsByTagName(s)[0]
        a.async = 1
        a.src = c
        a.onload = () => {
          window.kiwi.init('', 'JJaOyjQxNOiindzyIQeHj2dLArupUVyi', {})
        }
        m.parentNode.insertBefore(a, m)
      })(
        window,
        document,
        'script',
        'https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=' +
          new Date().getTime(),
        'kiwi'
      )
    }
  }, [])

  return null
}

export default WhatsApp
