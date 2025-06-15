'use client'

import { Typography, Card, Row, Col, Button, Space, Alert, List } from 'antd';
import { PhoneOutlined, GlobalOutlined, CalendarOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Reservation() {
    const externalSites = [
        { name: '楽天トラベル', url: '#', description: 'ポイントが貨まる' },
        { name: 'Yahoo!トラベル', url: '#', description: 'PayPayボーナスあり' },
        { name: 'JTB', url: '#', description: '安心の大手旅行会社' },
        { name: 'じゃらんnet', url: '#', description: '豊富なプラン' },
    ];

    const reservationNotes = [
        'チェックイン：15:00～19:00',
        'チェックアウト：～10:00',
        'キャンセル料金は各予約サイトの規定に準じます',
        '連泊やグループ利用の場合はお電話での相談をお勧めします',
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <Typography.Title level={1}>ご予約</Typography.Title>
            <Typography.Paragraph style={{ fontSize: '16px', marginBottom: '40px' }}>
                いとや旅館では、お電話での直接予約のほか、
                主要旅行予約サイトからもご予約いただけます。
            </Typography.Paragraph>

            <Alert
                message="お電話での直接予約がおすすめ"
                description="お客様のご要望や特別なお願いにも柔軟に対応できます。お気軽にお電話ください。"
                type="success"
                showIcon
                style={{ marginBottom: '40px' }}
            />

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Meta
                            title={
                                <Space>
                                    <PhoneOutlined />
                                    お電話でのご予約
                                </Space>
                            }
                            description="特別なリクエストや相談がある場合はお電話がおすすめです。"
                        />
                        <div style={{ textAlign: 'center', margin: '24px 0' }}>
                            <Button
                                type="primary"
                                size="large"
                                icon={<PhoneOutlined />}
                                style={{ fontSize: '18px', height: '50px', padding: '0 30px' }}
                            >
                                0238-47-2133
                            </Button>
                            <div style={{ marginTop: '8px' }}>
                                <Typography.Text type="secondary">受付時間：9:00～21:00</Typography.Text>
                            </div>
                        </div>
                        <Typography.Title level={4}>電話予約のメリット</Typography.Title>
                        <List
                            dataSource={[
                                '直接相談できるため安心',
                                'プランの詳細な確認が可能',
                                '特別なリクエストに対応',
                                'アレルギー等の相談ができる',
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Typography.Text>{item}</Typography.Text>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Meta
                            title={
                                <Space>
                                    <GlobalOutlined />
                                    オンライン予約サイト
                                </Space>
                            }
                            description="各サイトのポイントや特典を比較してお得にご予約いただけます。"
                        />
                        <List
                            style={{ marginTop: 16 }}
                            dataSource={externalSites}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[
                                        <Button key="reserve" type="link" href={item.url} target="_blank">
                                            予約サイトへ
                                        </Button>,
                                    ]}
                                >
                                    <List.Item.Meta
                                        title={<Typography.Text strong>{item.name}</Typography.Text>}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                        <Alert
                            message="注意事項"
                            description="各予約サイトのキャンセルポリシーや料金体系が異なります。詳細は各サイトでご確認ください。"
                            type="warning"
                            style={{ marginTop: 16 }}
                        />
                    </Card>
                </Col>
            </Row>

            <Card style={{ marginTop: '40px' }}>
                <Typography.Title level={3}>
                    <CalendarOutlined style={{ marginRight: '8px' }} />
                    ご予約時の注意事項
                </Typography.Title>
                <List
                    dataSource={reservationNotes}
                    renderItem={(item) => (
                        <List.Item>
                            <InfoCircleOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                            <Typography.Text>{item}</Typography.Text>
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
}
