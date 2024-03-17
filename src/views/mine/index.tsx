import React from 'react'
import Header from '@/views/common/Header'
import { Button } from 'antd'

export default function Mine() {
  return (
    <>
      <Header title="个人中心" />
      <div className="mine layout">
        <Button href="/mine/order" block size="large">订单列表</Button>
      </div>
    </>
  )
}