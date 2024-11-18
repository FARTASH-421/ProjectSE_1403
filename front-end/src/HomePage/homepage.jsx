import React from 'react'
import Navbar from './Navbar'
export default function HomePage() {
    const [user, setUser] = useState(null);

  return (
    <div>
        <Navbar user={user}/>
        {/* <a href='./login'>Log in</a> */}

    </div>
  )
}
