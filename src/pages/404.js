import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Image from "next/image"

export default function Custom404() {
  const [countdown, setCountdown] = useState(3)
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 1200)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    // Membersihkan interval setelah komponen di-unmount
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="justify-center container flex text-black md:py-16 py-48">
      <div className="space-y-4">
        <Image src="./404.svg" height={500} width={500} />
        <div className="font-semibold hover:text-text-200 text-center">
          <div>Sorry Page Not Found</div>

          <div className="text-center">
            {countdown > 0 ? (
              <h1>Redirect to Home in {countdown} s</h1>
            ) : (
              <h1></h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
