import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const WeatherTime = (props) => {
    return(
        <>
            <Row>
                <Col span={24}>
                    <Title level={5} style={{ float: 'left'}}>{props.timeName}</Title>
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <Title style={{ float: 'left' }}>{props.temp}° C </Title>
                </Col>

                <Col span={14}>
                    {props.icon}
                    <Text>{props.pheno}</Text>
                </Col>
            </Row>
        </>
    );
};

export default WeatherTime;