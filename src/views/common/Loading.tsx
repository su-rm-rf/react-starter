import React from 'react'
import { Button } from 'antd'

export default function Loading() {
  return (
    <div className="loading">
      <Button type="text" loading>加载中</Button>
    </div>
  )
}