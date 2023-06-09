import { Table } from 'antd'
import React from 'react'

const AntTable = () => {
    const data = [
        {
            name: "Name 1",
            age: 89,
            address: "Address 1",
            key: 1
        },
        {
            name: "Name 2",
            age: 100,
            address: "Address 2",
            key: 2
        },
        {
            name: "Name 3",
            age: 50,
            address: "Address 3",
            key: 3
        },

    ]

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "key",
            render: (name) => {
                return <a>{name}</a>
            }
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "key",
            sorter: (a,b) => a.age - b.age
        }, {
            title: "Address",
            dataIndex: "address",
            key: "key"
        },
        {
            title: "Graduated",
            key: "key",
            render: (payload) => {
                return <p>{payload.age > 20 ? "True" : "False" }</p>
            }
        }
    ]
    return (
        <div className='App-header'>
            <Table
                dataSource={data}
                columns={columns}
                pagination
            >

            </Table>
        </div>
    )
}

export default AntTable
