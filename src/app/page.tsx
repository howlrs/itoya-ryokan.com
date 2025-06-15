'use client'

import { Row, Col, Card, Button, Space, Divider, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

// 環境変数の取得
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'いとや旅館/糸蔵';
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '';
const PHONE = process.env.NEXT_PUBLIC_PHONE || '';
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || '';

export default function Home() {
  return (
    <div style={{ padding: '0 20px' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '8px',
          padding: '60px 40px',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <Title level={1} style={{ color: '#1890ff', marginBottom: '16px' }}>
          熊野大社の麓 地酒と肴で「緑」を繋ぐ宿
        </Title>
        <Title level={2} style={{ color: '#595959', fontWeight: 400 }}>
          {SITE_NAME}
        </Title>
        <Text
          style={{ fontSize: '18px', color: '#8c8c8c', maxWidth: '600px', margin: '20px auto', display: 'block' }}
        >
          {SITE_DESCRIPTION}
        </Text>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <div
                style={{
                  height: '200px',
                  background: 'linear-gradient(45deg, #52c41a, #73d13d)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EnvironmentOutlined style={{ fontSize: '48px', color: 'white' }} />
              </div>
            }
          >
            <Meta
              title="熊野大社の麓という歴史ある立地"
              description={
                <>
                  <Text style={{ display: 'block' }}>赤湯駅より車で10分</Text>
                  <Text style={{ display: 'block' }}>宮内駅より徒歩5分</Text>
                  <Text style={{ display: 'block' }}>米沢市街や高畠ワイナリーへも好アクセス</Text>
                </>
              }
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <div
                style={{
                  height: '200px',
                  background: 'linear-gradient(45deg, #ff7875, #ff9c6e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <StarOutlined style={{ fontSize: '48px', color: 'white' }} />
              </div>
            }
          >
            <Meta
              title="東京の料亭・有名ホテル出身の館主による料理"
              description={
                <>
                  <Text style={{ display: 'block' }}>旬の山・海の幸を使用</Text>
                  <Text style={{ display: 'block' }}>全国選りすぐりの日本酒</Text>
                  <Text style={{ display: 'block' }}>米沢牛プランもご用意</Text>
                </>
              }
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <div
                style={{
                  height: '200px',
                  background: 'linear-gradient(45deg, #1890ff, #40a9ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ClockCircleOutlined style={{ fontSize: '48px', color: 'white' }} />
              </div>
            }
          >
            <Meta
              title="リーズナブルな価格でのおもてなし"
              description={
                <>
                  <Text style={{ display: 'block' }}>最安料金：7,600円〜/人</Text>
                  <Text style={{ display: 'block' }}>大人2名利用時・税込</Text>
                  <Text style={{ display: 'block' }}>{ADDRESS}</Text>
                </>
              }
            />
          </Card>
        </Col>
      </Row>

      <Divider />

      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <Title level={3}>お問い合わせ・ご予約</Title>
        <Space size="large" wrap>
          <Button type="primary" size="large" icon={<PhoneOutlined />} href={`tel:${PHONE}`}>
            TEL: {PHONE}
          </Button>
          <Button size="large" href="/reservation">ご予約はこちら</Button>
        </Space>
        <div style={{ marginTop: '20px' }}>
          <Text style={{ fontSize: '16px', color: '#8c8c8c' }}>
            {ADDRESS} | 山形 &gt; 米沢・置賜
          </Text>
        </div>
      </div>
    </div>
  );
}
