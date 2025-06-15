'use client'

import { Card, Row, Col, Divider, List, Tag, Typography } from 'antd';
import { EnvironmentOutlined, StarOutlined, CrownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

export default function About() {
    const basicInfo = [
        { label: '正式名称', value: '熊野大社の麓 地酒と肴で「緑」を繋ぐ宿 いとや旅館' },
        { label: '所在地', value: '山形県南陽市宮内１０２４' },
        { label: 'エリア', value: '山形 > 米沢・置賜' },
        { label: '料金', value: '最安料金7,600円～/人（大人2名利用時、税込）' },
        { label: 'TEL', value: '0238-47-2133' },
    ];

    const accessInfo = [
        '赤湯駅より車で10分',
        '宮内駅より徒歩5分',
        '米沢から車で25分',
        '山形市内から車で40分',
        '小国から車で40分',
    ];

    const features = [
        {
            title: '館主の経歴',
            description: '東京の料亭・某有名ホテルで腕を磨いた館主が自ら腕を振い、旬の山・海の幸を調理',
            icon: <CrownOutlined />,
        },
        {
            title: '日本酒コレクション',
            description: '日本酒は山形のみならず全国から選りすぐりの逸品を取り揃え',
            icon: <StarOutlined />,
        },
        {
            title: '立地の魅力',
            description: '米沢市街や南陽・高畠ワイナリーへのアクセス良好。熊野大社の麓という立地',
            icon: <EnvironmentOutlined />,
        },
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <Title level={1}>旅館について</Title>
            <Text style={{ display: 'block', fontSize: '16px', marginBottom: '40px' }}>
                熊野大社の麓にたたずむ「いとや旅館」は、「人の温もり」と「日本酒の旨さ」をテーマに、
                お客様に心からのおもてなしをご提供いたします。
            </Text>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                    <Card title="基本情報" style={{ height: '100%' }}>
                        <List
                            dataSource={basicInfo}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<strong>{item.label}</strong>}
                                        description={item.value}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Meta
                            title={(
                                <>
                                    <EnvironmentOutlined style={{ marginRight: '8px' }} />
                                    アクセス
                                </>
                            )}
                            description={(
                                <List
                                    dataSource={accessInfo}
                                    renderItem={item => (
                                        <List.Item>
                                            <Text>{item}</Text>
                                        </List.Item>
                                    )}
                                />
                            )}
                        />
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Title level={2}>サービス・特徴</Title>
            <div style={{ marginBottom: '20px' }}>
                <Tag color="blue" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    米沢牛プラン販売
                </Tag>
                <Tag color="green" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    「人の温もり」と「日本酒の旨さ」に出会う宿
                </Tag>
            </div>

            <Row gutter={[24, 24]}>
                {features.map((feature, index) => (
                    <Col xs={24} md={8} key={index}>
                        <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                            <div style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }}>
                                {feature.icon}
                            </div>
                            <Meta
                                title={<strong style={{ fontSize: '18px' }}>{feature.title}</strong>}
                                description={<Text>{feature.description}</Text>}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Divider />

            <Card style={{ background: '#f0f9ff', textAlign: 'center' }}>
                <Title level={3}>コンセプト</Title>
                <Text style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', display: 'block' }}>
                    地酒と肴で「緑」を繋ぐというコンセプトのもと、熊野大社の麓という歴史的・精神的な立地の魅力を活かし、
                    お客様に特別なひとときをお過ごしいただけるよう心がけております。
                </Text>
            </Card>
        </div>
    );
}
