import Head from "next/head"
import Login from "./login"
import Register from "./register"
import MainHome from "@/views/home/MainHome"
import React from "react"

export default function index() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}
