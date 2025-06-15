'use client'

import { Card, Row, Col, List, Space, Tag } from 'antd';
import {
    CarOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

export default function Access() {
    const trainAccess = [
        { route: 'JR奥羽本線「赤湯駅」', time: '車で約10分', detail: '最寄りの主要駅' },
        { route: 'JR奥羽本線「宮内駅」', time: '徒歩5分', detail: '最寄り駅' }
    ];

    const carAccess = [
        { route: '米沢から', time: '車で25分', detail: '米沢市街地からのアクセス' },
        { route: '山形市内から', time: '車で40分', detail: '山形市中心部からのアクセス' },
        { route: '小国から', time: '車で40分', detail: '小国町からのアクセス' }
    ];

    const nearbyAttractions = [
        { name: '熊野大社', distance: '徒歩圏内', description: '東北の伊勢と呼ばれる古社' },
        { name: '南陽・高畠ワイナリー', distance: '車で約15分', description: '山形の銘酒が楽しめる' },
        { name: '米沢市街', distance: '車で25分', description: '上杉の城下町' }
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>アクセス</h1>
            <p style={{ fontSize: '16px', marginBottom: '40px' }}>
                熊野大社の麓にある「いとや旅館」へのアクセス方法をご案内いたします。
                電車、お車どちらでもお越しいただけます。
            </p>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Card.Meta
                            title={
                                <Space>
                                    <ClockCircleOutlined />
                                    電車でお越しの場合
                                </Space>
                            }
                            description={
                                <>
                                    <List
                                        dataSource={trainAccess}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={<strong>{item.route}</strong>}
                                                    description={
                                                        <div>
                                                            <Tag color="blue">{item.time}</Tag>
                                                            <span style={{ color: '#8c8c8c' }}>{item.detail}</span>
                                                        </div>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                    <p style={{ marginTop: '16px', fontSize: '14px', color: '#8c8c8c' }}>
                                        赤湯駅前より南陽市営バス「宮内線」にて「熊野大社前」下車徒歩3分でもお越しいただけます。
                                    </p>
                                </>
                            }
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Card.Meta
                            title={
                                <Space>
                                    <CarOutlined />
                                    お車でお越しの場合
                                </Space>
                            }
                            description={
                                <>
                                    <List
                                        dataSource={carAccess}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={<strong>{item.route}</strong>}
                                                    description={
                                                        <div>
                                                            <Tag color="green">{item.time}</Tag>
                                                            <span style={{ color: '#8c8c8c' }}>{item.detail}</span>
                                                        </div>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                    <p style={{ marginTop: '16px', fontSize: '14px', color: '#8c8c8c' }}>
                                        東北中央自動車道「南陽高畠IC」より約15分、山形自動車道「山形蔵王IC」より約30分
                                    </p>
                                </>
                            }
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Card.Meta
                            title={
                                <Space>
                                    <EnvironmentOutlined />
                                    住所・お問い合わせ
                                </Space>
                            }
                            description={
                                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                                    <div>
                                        <p>
                                            <strong>住所</strong>
                                        </p>
                                        <p>山形県南陽市宮内１０２４</p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>電話番号</strong>
                                        </p>
                                        <p>
                                            <PhoneOutlined /> 0238-47-2133
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>エリア</strong>
                                        </p>
                                        <p>山形 &gt; 米沢・置賜</p>
                                    </div>
                                </Space>
                            }
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Card.Meta
                            title="周辺観光スポット"
                            description={
                                <List
                                    dataSource={nearbyAttractions}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={<strong>{item.name}</strong>}
                                                description={
                                                    <div>
                                                        <Tag color="orange">{item.distance}</Tag>
                                                        <br />
                                                        <span style={{ color: '#8c8c8c' }}>{item.description}</span>
                                                    </div>
                                                }
                                            />
                                        </List.Item>
                                    )}
                                />
                            }
                        />
                    </Card>
                </Col>
            </Row>

            <Card
                style={{
                    marginTop: '24px',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    textAlign: 'center'
                }}
            >
                <h3>立地の特徴</h3>
                <p style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                    熊野大社の麓という歴史ある立地にあり、米沢市街や南陽・高畠ワイナリーへのアクセスも良好です。
                    観光の拠点としてもご利用いただけます。
                </p>
            </Card>
        </div>
    );
}
