'use client'

import { Typography, Card, Row, Col, Alert } from 'antd';
import { InstagramOutlined, CameraOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Sns() {
    const galleryItems = [
        {
            title: '日本酒コレクション',
            description: '全国から選りすぐりの逸品',
            category: 'お酒'
        },
        {
            title: '館主特製料理',
            description: '旬の山海の幸を使った美味',
            category: '料理'
        },
        {
            title: '熊野大社',
            description: '徒歩圏内の武史ある神社',
            category: '景色'
        },
        {
            title: '米沢牛料理',
            description: '山形が誇る最高級ブランド牛',
            category: '料理'
        },
        {
            title: '旅館の外観',
            description: '伝統と温もりあふれる外観',
            category: '施設'
        },
        {
            title: '客室からの景色',
            description: '窓から眺める美しい風景',
            category: '景色'
        }
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <Typography.Title level={1}>ギャラリー</Typography.Title>
            <Typography.Paragraph style={{ fontSize: '16px', marginBottom: '40px' }}>
                いとや旅館の魅力を写真でご紹介いたします。
                館主自慢の料理や日本酒、そして美しい景色をお楽しみください。
            </Typography.Paragraph>

            <Alert
                message="写真ギャラリーについて"
                description="現在、SNSやインスタグラムからの写真取り込み機能を整備中です。お客様の写真や旅館の日常をこちらでご紹介できるよう、準備を進めております。"
                type="info"
                showIcon
                style={{ marginBottom: '40px' }}
            />

            <Row gutter={[24, 24]}>
                {galleryItems.map((item, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <Card
                            hoverable
                            cover={
                                <div style={{
                                    height: '200px',
                                    background: `linear-gradient(45deg, ${[
                                        '#52c41a, #73d13d',
                                        '#1890ff, #40a9ff',
                                        '#fa8c16, #ffc53d',
                                        '#eb2f96, #f759ab',
                                        '#722ed1, #9254de',
                                        '#13c2c2, #36cfc9'
                                    ][index % 6]})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '48px'
                                }}>
                                    <CameraOutlined />
                                </div>
                            }
                            actions={[
                                <div key="category" style={{ color: '#1890ff' }}>
                                    #{item.category}
                                </div>
                            ]}
                        >
                            <Meta
                                title={<Typography.Text strong>{item.title}</Typography.Text>}
                                description={item.description}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Card
                style={{
                    marginTop: '40px',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    textAlign: 'center'
                }}
            >
                <Typography.Title level={3}>
                    <InstagramOutlined style={{ marginRight: '8px' }} />
                    お客様のお写真もお待ちしております
                </Typography.Title>
                <Typography.Paragraph style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                    いとや旅館での素敵なひとときを写真に収めて、
                    ぜひSNSでシェアしてください。素敵なお写真はこちらのギャラリーでもご紹介させていただきます。
                </Typography.Paragraph>
            </Card>
        </div>
    );
}
