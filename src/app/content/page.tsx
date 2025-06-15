'use client'

import { Typography, Card, Row, Col, List, Tag, Divider } from 'antd';
import { CustomerServiceOutlined, StarOutlined, GiftOutlined } from '@ant-design/icons';

export default function Content() {
    const facilities = [
        { name: '日本酒バー', description: '全国選りすぐりの日本酒をご用意', icon: <GiftOutlined /> },
        { name: '料理長特製料理', description: '東京の料亭・ホテル出身の館主による料理', icon: <StarOutlined /> },
        { name: '熊野大社散策', description: '徒歩圏内の歴史ある神社', icon: <CustomerServiceOutlined /> },
    ];

    const services = [
        '24時間フロント対応',
        'Wi-Fi完備',
        '駐車場完備',
        '送迎サービス（要相談）',
        '観光案内',
        '米沢牛プラン',
    ];

    const specialPlans = [
        {
            title: '米沢牛プラン',
            description: '山形県が誇る最高級ブランド牛をご堪能いただけます',
            features: ['米沢牛すき焼き', '地酒との相性抜群', '館主厳選の逸品']
        },
        {
            title: '日本酒プラン',
            description: '山形はもちろん全国から選りすぐりの日本酒をお楽しみください',
            features: ['日本酒飲み比べ', '肴との絶妙なマリアージュ', '館主による酒の解説']
        }
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <Typography.Title level={1}>施設・サービス</Typography.Title>
            <Typography.Paragraph style={{ fontSize: '16px', marginBottom: '40px' }}>
                いとや旅館では、お客様に快適にお過ごしいただけるよう、
                様々な施設とサービスをご用意しております。
            </Typography.Paragraph>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                    <Card title="主な施設" style={{ height: '100%' }}>
                        <List
                            dataSource={facilities}
                            renderItem={item => (
                                <List.Item>
                                    <Card>
                                        <Card.Meta
                                            avatar={<span style={{ fontSize: '24px', color: '#1890ff' }}>{item.icon}</span>}
                                            title={<Typography.Text strong>{item.name}</Typography.Text>}
                                            description={item.description}
                                        />
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card title="サービス一覧" style={{ height: '100%' }}>
                        <List
                            dataSource={services}
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text>{item}</Typography.Text>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Typography.Title level={2}>特別プラン</Typography.Title>
            <Row gutter={[24, 24]}>
                {specialPlans.map((plan, index) => (
                    <Col xs={24} md={12} key={index}>
                        <Card style={{ height: '100%' }}>
                            <Card.Meta
                                title={<Typography.Text strong style={{ fontSize: '18px' }}>{plan.title}</Typography.Text>}
                                description={plan.description}
                            />
                            <div style={{ marginTop: '16px' }}>
                                {plan.features.map((feature, idx) => (
                                    <Tag key={idx} color="blue" style={{ marginBottom: '8px' }}>
                                        {feature}
                                    </Tag>
                                ))}
                            </div>
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
                <Typography.Title level={3}>館主のこだわり</Typography.Title>
                <Typography.Paragraph style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                    東京の料亭・某有名ホテルで腕を磨いた館主が、旬の山・海の幸を使った料理と、
                    全国から選りすぐった日本酒で、お客様に「人の温もり」と「日本酒の旨さ」をお届けいたします。
                </Typography.Paragraph>
            </Card>
        </div>
    );
}
