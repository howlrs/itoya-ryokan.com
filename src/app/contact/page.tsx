'use client';

import { Typography, Card, Row, Col, Form, Input, Button, Space, Alert } from 'antd';
import { PhoneOutlined, ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Meta } = Card;

export default function Contact() {
    const [form] = Form.useForm();

    const onFinish = (values: Record<string, unknown>) => {
        console.log('Form values:', values);
    };

    const contactInfo = [
        {
            icon: <PhoneOutlined />,
            title: 'お電話でのお問い合わせ',
            content: '0238-47-2133',
            description: '受付時間：9:00〜21:00'
        },
        {
            icon: <EnvironmentOutlined />,
            title: '住所',
            content: '山形県南陽市宮内１０２４',
            description: '熊野大社の麓'
        },
        {
            icon: <ClockCircleOutlined />,
            title: '営業時間',
            content: 'チェックイン：15:00〜19:00',
            description: 'チェックアウト：〜10:00'
        }
    ];

    return (
        <div style={{ padding: '0 20px' }}>
            <Typography.Title level={1}>お問い合わせ</Typography.Title>
            <Typography.Paragraph style={{ fontSize: '16px', marginBottom: '40px' }}>
                ご不明な点やご質問がございましたら、お気軽にお問い合わせください。
                宿泊に関するご相談やご予約についてもお受けいたします。
            </Typography.Paragraph>

            <Alert
                message="ご予約について"
                description="当旅館では、お電話での直接予約を承っております。下記のお問い合わせフォームからもご予約のご相談を受け付けております。"
                type="info"
                showIcon
                style={{ marginBottom: '40px' }}
            />

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Meta title="お問い合わせ情報" />
                        <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '16px' }}>
                            {contactInfo.map((item, index) => (
                                <div key={index}>
                                    <Space style={{ marginBottom: '8px' }}>
                                        <span style={{ fontSize: '18px', color: '#1890ff' }}>
                                            {item.icon}
                                        </span>
                                        <Typography.Text strong>{item.title}</Typography.Text>
                                    </Space>
                                    <div style={{ marginLeft: '26px' }}>
                                        <Typography.Text style={{ fontSize: '16px' }}>
                                            {item.content}
                                        </Typography.Text>
                                        <br />
                                        <Typography.Text type="secondary">{item.description}</Typography.Text>
                                    </div>
                                </div>
                            ))}
                        </Space>

                        <Card style={{ marginTop: '24px', background: '#f9f9f9' }}>
                            <Meta
                                title="お問い合わせ内容例"
                                description={
                                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        <li>宿泊料金・プランについて</li>
                                        <li>客室・施設について</li>
                                        <li>お料理・米沢牛プランについて</li>
                                        <li>アクセス・送迎について</li>
                                        <li>周辺観光について</li>
                                        <li>ご予約について</li>
                                    </ul>
                                }
                            />
                        </Card>
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card style={{ height: '100%' }}>
                        <Meta title="お問い合わせフォーム" />
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                            style={{ marginTop: '16px' }}
                        >
                            <Form.Item
                                label="お名前"
                                name="name"
                                rules={[{ required: true, message: 'お名前を入力してください' }]}
                            >
                                <Input placeholder="山田 太郎" />
                            </Form.Item>

                            <Form.Item
                                label="メールアドレス"
                                name="email"
                                rules={[
                                    { required: true, message: 'メールアドレスを入力してください' },
                                    { type: 'email', message: '正しいメールアドレスを入力してください' }
                                ]}
                            >
                                <Input placeholder="example@email.com" />
                            </Form.Item>

                            <Form.Item
                                label="電話番号"
                                name="phone"
                                rules={[{ required: true, message: '電話番号を入力してください' }]}
                            >
                                <Input placeholder="090-1234-5678" />
                            </Form.Item>

                            <Form.Item
                                label="お問い合わせ内容"
                                name="message"
                                rules={[{ required: true, message: 'お問い合わせ内容を入力してください' }]}
                            >
                                <TextArea rows={6} placeholder="ご質問やご要望をお聞かせください" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block>
                                    お問い合わせを送信
                                </Button>
                            </Form.Item>
                        </Form>

                        <Alert
                            message="送信後について"
                            description="お問い合わせをいただいた後、通常24時間以内にご返信いたします。お急ぎの場合は、お電話でお問い合わせください。"
                            type="warning"
                            showIcon
                            style={{ marginTop: '16px' }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
