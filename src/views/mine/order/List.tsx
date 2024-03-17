import React from 'react'
import Header from '@/views/common/Header'

import { getOrderList } from '@/api'
import { List } from 'antd'
import { Order } from '@/constant/types'

export default function OrderList() {
  const orderList = getOrderList()
  console.log(orderList)

  return (
    <>
      <Header title="订单列表" />
      <div className="order-list layout">
        <List
          itemLayout="vertical"
          bordered
          dataSource={ orderList }
          renderItem={ (order: Order) => (
            <List.Item>
              <div className="order-list-item">
                <label>订单号：</label>
                <span>{ order.uid }</span>
              </div>
              <div className="order-list-item">
                <label>名称：</label>
                <span>{ order.name }</span>
              </div>
              <div className="order-list-item">
                <label>单价：</label>
                <span>{ order.price }</span>
              </div>
              <div className="order-list-item">
                <label>数量：</label>
                <span>{ order.number }</span>
              </div>
              <div className="order-list-item">
                <label>总价：</label>
                <span>{ order.total }</span>
              </div>
            </List.Item>
          )}
        ></List>
      </div>
    </>
  )
}