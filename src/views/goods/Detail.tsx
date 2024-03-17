import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Header from '@/views/common/Header'
import { GOODS_LIST } from '@/constant/goodsList'
import { GOODS } from '@/constant/types'
import { Button, InputNumber } from 'antd'
import { addToCart, addBuy } from '@/api'
import { v4 as uuidv4 } from 'uuid'

export default function GoodsDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [number, setNumber] = useState(1)
  
  const res = GOODS_LIST.find(item => String(item.id) === id)
  const goods: GOODS = {
    id: res?.id || null,
    name: res?.name || '',
    price: res?.price || 0,
  }

  const handleNumberChange = (value) => {
    setNumber(value)
  }

  const handleAddToCart = () => {
    addToCart({
      uid: uuidv4(),
      ...goods,
      number,
      total: goods.price * number,
    })
    navigate('/cart')
  }
  
  const handleBuy = () => {
    addBuy({
      uid: uuidv4(),
      ...goods,
      number,
      total: goods.price * number,
    })
    navigate('/mine/order')
  }

  return (
    <>
      <Header title="商品详情" />
      <div className="goods-detail layout">
        <div className="goods-detail-item">
          <label>名称：</label>
          <span>{ goods?.name }</span>
        </div>
        <div className="goods-detail-item">
          <label>单价：</label>
          <span>¥ { goods?.price }</span>
        </div>
        <div className="goods-detail-item">
          <label>数量：</label>
          <InputNumber defaultValue={ number } onChange={ handleNumberChange } />
        </div>
        <div className="goods-detail-item btn-list">
          <Button onClick={ handleAddToCart }>添加到购物车</Button>
          <Button type="primary" onClick={ handleBuy }>下单</Button>
        </div>
      </div>
    </>
  )
}