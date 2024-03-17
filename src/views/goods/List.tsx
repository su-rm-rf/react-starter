import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '@/views/common/Header'
import { GOODS_LIST } from '@/constant/goodsList'
import { Card, Col, Row } from 'antd'

export default function GoodsList() {
  const navigate = useNavigate()
  
  const clickCard = (goods) => {
    navigate(`/goods/${ goods.id }`)
  }
  
  return (
    <>
      <Header title="商品列表" />
      <div className="goods-list layout">
        <Row gutter={ 10 }>
          {
            GOODS_LIST.map((goods: any) => 
              <Col span={ 12 } key={ goods.id } className="goods-list-col">
                <Card title={ goods.name } bordered
                  onClick={ () => clickCard(goods) }
                >
                  { goods.name }
                </Card>
              </Col>
            )
          }
        </Row>
      </div>
    </>
  )
}