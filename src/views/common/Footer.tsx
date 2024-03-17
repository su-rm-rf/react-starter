import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <nav className="main-footer">
        <NavLink to={ '/goods' }>首页</NavLink>
        <NavLink to={ '/cart' }>购物车</NavLink>
        <NavLink to={ '/mine' }>我的</NavLink>
      </nav>
    </>
  )
}