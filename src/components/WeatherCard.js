import React from 'react';
import { Card, Divider, Typography, Col, Space } from 'antd';

import WeatherTime from './WeatherTime';
import ConditionIcons from './ConditionIcons';

const { Text } = Typography;

function WeatherCard(props) {

    const days = [
        { id: 1, name: 'Даваа' },
        { id: 2, name: 'Мягмар' },
        { id: 3, name: 'Лхагва' },
        { id: 4, name: 'Пүрэв' },
        { id: 5, name: 'Баасан' },
        { id: 6, name: 'Бямба' },
        { id: 0, name: 'Ням' },
    ];
    const currentDay = new Date(props.weatherTime).getDay();
    const dayName = days.filter(day => day.id === currentDay).map(fDay => (
        fDay.name
    ));
    const cardTitle = <Space size={60}>
                        <Text style={{ color: '#fff' }}>{dayName}</Text>
                        <Text style={{ color: '#fff' }}>{props.weatherTime}</Text>
                      </Space>;
    const nightCondIcon = ConditionIcons.getNightIcon(props.phenoNightId);
    
    const dayCondIcon = ConditionIcons.getDayIcon(props.phenoDayId);

    return(
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <Card 
                hoverable={true}
                style={{ margin: '5px 10px 5px 10px' }} title={cardTitle} 
                headStyle={{ backgroundColor: '#3498db' }}
                bodyStyle={{ backgroundColor: '#f1f2f6' }}>
                <WeatherTime 
                    key={1}
                    timeName = "Шөнө" 
                    temp = {props.nightTemp} 
                    icon = {nightCondIcon}
                    pheno = {props.phenoNight} />
                <Divider dashed />
                <WeatherTime
                    key={2}
                    timeName="Өдөр"
                    temp={props.dayTemp}
                    icon={dayCondIcon}
                    pheno={props.phenoDay}
                />
            </Card>
        </Col>
    );
};

export default WeatherCard;