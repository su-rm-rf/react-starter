import React, { useEffect, useState } from 'react'
import Header from '@/views/common/Header'

import { getCart } from '@/api'
import { Button, List, Popconfirm } from 'antd'
import { Order } from '@/constant/types'
import { addBuy, removeFromCart } from '@/api'
import { useNavigate } from 'react-router'

export default function OrderList() {
  const navigate = useNavigate()
  let [cart, setCart] = useState([])

  useEffect(() => {
    handleGetCart()
  }, [])
  
  const handleGetCart = () => {
    setCart(getCart())
  }

  const handleDelete = (obj) => {
    removeFromCart(obj)
    handleGetCart()
  }

  const handleBuy = (order) => {
    addBuy({
      ...order,
    })
    navigate('/mine/order')
  }

  return (
    <>
      <Header title="购物车" />
      <div className="cart layout">
        <List
          itemLayout="vertical"
          bordered
          dataSource={ cart }
          renderItem={ (order: Order) => (
            <List.Item>
              <div className="cart-item">
                  <label>名称：</label>
                  <span>{ order.name }</span>
                </div>
                <div className="cart-item">
                  <label>单价：</label>
                  <span>{ order.price }</span>
                </div>
                <div className="cart-item">
                  <label>数量：</label>
                  <span>{ order.number }</span>
                </div>
                <div className="cart-item">
                  <label>总价：</label>
                  <span>{ order.total }</span>
                </div>
                <div className="cart-item btn-list">
                  <Popconfirm title="确定删除？" 
                    cancelText="取消"
                    okText="确定"
                    onConfirm={ () => handleDelete(order) }
                  >
                    <Button danger>删除</Button>
                  </Popconfirm>
                  <Button onClick={ () => handleBuy(order) }>下单</Button>
                </div>
            </List.Item>
          )}
        ></List>
      </div>
    </>
  )
}