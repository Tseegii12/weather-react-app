import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const cities = [
    { id: '1', name: 'Улаанбаатар' },
    { id: '2', name: 'Алтай' },
    { id: '3', name: 'Арвайхээр' },
    { id: '4', name: 'Багануур' },
    { id: '5', name: 'Баруун-Урт' },
    { id: '6', name: 'Баянхонгор' },
    { id: '7', name: 'Булган' },
    { id: '8', name: 'Даланзадгад' },
    { id: '9', name: 'Дархан' },
    { id: '10', name: 'Замын-Үүд' },
    { id: '11', name: 'Зуунмод' },
    { id: '12', name: 'Мандалговь' },
    { id: '13', name: 'Мөрөн' },
    { id: '14', name: 'Сайншанд' },
    { id: '15', name: 'Сүхбаатар' },
    { id: '16', name: 'Тосонцэнгэл' },
    { id: '17', name: 'Улаангом' },
    { id: '18', name: 'Улиастай' },
    { id: '19', name: 'Ханбогд' },
    { id: '20', name: 'Хархорин' },
    { id: '21', name: 'Хатгал' },
    { id: '22', name: 'Ховд' },
    { id: '23', name: 'Цэцэрлэг' },
    { id: '24', name: 'Чингис' },
    { id: '25', name: 'Чойбалсан' },
    { id: '26', name: 'Чойр' },
    { id: '27', name: 'Эрдэнэт-Овоо' },
    { id: '28', name: 'Өлгий' },
];

function SearchBar(props) {

    const onChange = value => {
        props.handleSearch(value);
    }

    return(
        <Select
            showSearch
            style={{ padding: '20px 0 20px 0' }}
            placeholder="Хот сонгоно уу..."
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={cities[0].name}
        >
            {
                cities.map(city => (
                    <Option key={city.id} value={city.name}>{city.name}</Option>
                ))
            }
        </Select>
    );
}

export default SearchBar;
