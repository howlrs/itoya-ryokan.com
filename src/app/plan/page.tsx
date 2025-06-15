'use client'

import { Typography, Card, Row, Col, List, Alert } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export default function Plan() {
    const roomFeatures = [
        '和室タイプのお部屋',
        '全室Wi-Fi完備',
        'アメニティ充実',
        '窓からの景色抜群',
        '熊野大社へのアクセス良好',
    ];

    const accommodationInfo = [
        { label: '最安料金', value: '7,600円～/人' },
        { label: '使用条件', value: '大人2名利用時・税込' },
        { label: 'チェックイン', value: '15:00～19:00' },
        { label: 'チェックアウト', value: '～10:00' },
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <Typography.Title level={1}>客室</Typography.Title>
            <Typography.Paragraph style={{ fontSize: '16px', marginBottom: '40px' }}>
                熊野大社の麓に佇むいとや旅館の客室で、静かで落ち着いたひとときをお過ごしください。
                伝統的な和のしつらいと現代的な快適さを兼ね備えたお部屋です。
            </Typography.Paragraph>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Card.Meta
                            avatar={<HomeOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title="客室特徴"
                            description={
                                <List
                                    dataSource={roomFeatures}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Typography.Text>{item}</Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            }
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Card.Meta
                            avatar={<UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title="宿泊情報"
                            description={
                                <List
                                    dataSource={accommodationInfo}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={<Typography.Text strong>{item.label}</Typography.Text>}
                                                description={<Typography.Text style={{ fontSize: '16px' }}>{item.value}</Typography.Text>}
                                            />
                                        </List.Item>
                                    )}
                                />
                            }
                        />
                    </Card>
                </Col>
            </Row>

            <Alert
                message="お部屋について"
                description="具体的な客室の詳細や空室状況については、お電話でお問い合わせください。"
                type="info"
                showIcon
                style={{ marginTop: '40px' }}
            />

            <Card
                style={{
                    marginTop: '24px',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    textAlign: 'center',
                }}
            >
                <Typography.Title level={3}>お部屋からの景色</Typography.Title>
                <Typography.Paragraph style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                    窓からは熊野大社と周辺の美しい自然を眺望できます。
                    特に朝朝や夕方の景色は格別で、日常を忘れさせてくれる美しさです。
                </Typography.Paragraph>
            </Card>
        </div>
    );
}
