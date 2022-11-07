import React from 'react'
import { useState, useEffect } from 'react'
import './sidebar.css'
import SidebarOptions from './sidebaroptions'
import { Twitter } from '@material-ui/icons'
import { Home } from '@material-ui/icons'
import { Explore } from '@material-ui/icons'
import { Notifications } from '@material-ui/icons'
import { Search } from '@material-ui/icons'
import { Message } from '@material-ui/icons'
import { Bookmarks } from '@material-ui/icons'
import { Profile } from '@material-ui/icons'
import { More } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const options = [
  'Home',
  'Search',
  'Explore',
  'Notifications',
  'Message',
  'Bookmarks',
  'More',
]

function Sidebar() {
  const [id, setId] = useState(1)
  const [width, setWidth] = useState(window.innerWidth)
  const checkSize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)

    // return () => {
    //   window.removeEventListener('resize')
    // }
  }, [])

  return (
    <div className="sidebar">
      <Twitter className="twitter-icon" />
      {/* {options.map((option) => {
        return <SidebarOptions id={()=>getId()} Icons={option} text={option} />
      })} */}
      <SidebarOptions
        id={1}
        Icons={Home}
        text={'Home'}
        curId={id}
        setId={setId}
      />
      <SidebarOptions
        id={2}
        Icons={Search}
        text={'Search'}
        curId={id}
        setId={setId}
      />
      <SidebarOptions
        id={3}
        Icons={Explore}
        text={'Explore'}
        curId={id}
        setId={setId}
      />
      <SidebarOptions
        id={4}
        Icons={Notifications}
        text={'Notifications'}
        curId={id}
        setId={setId}
      />
      <SidebarOptions
        id={5}
        Icons={Message}
        text={'Message'}
        curId={id}
        setId={setId}
      />
      <SidebarOptions
        id={6}
        Icons={Bookmarks}
        text={'Bookmarks'}
        curId={id}
        setId={setId}
      />
      {/* <SidebarOptions Icons={Profile} text={"Profile"} /> */}
      <SidebarOptions Icons={More} text={'More'} curId={id} setId={setId} />
      {width > 800 ? (
        <Button variant="outlined" className="tweet-btn" fullWidth>
          tweet
        </Button>
      ) : (
        <Button>
          <Add className="add-btn" />
        </Button>
      )}
    </div>
  )
}

export default Sidebar
