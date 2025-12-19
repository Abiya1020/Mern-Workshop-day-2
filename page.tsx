import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <div className="w-full flex items-center justify-center p-10">
      <div className="max-w-xl container bg-blue-600 mx-auto p-10 border rounded-lg">
        <h1>Hello I am Second Page</h1> <br></br>
        <Link href="\">To the first app page</Link><br></br>
        <Link href="\third">To the third Page</Link>
      </div>
    </div>
  )
}

export default page
