// components/UserList.js
import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Context } from '../context/context';
import { getUsers } from '../apis/getUsers';


const UserList = () => {

    const { isShowUsers, setIsAddUser, setIsShowUsers } = useContext(Context)
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const params = {}
            const res = await getUsers(params)
            console.log('res-- :>> ', res?.success?.data?.data);
            setUsers(res?.success?.data?.data)
        } catch (err) {
            console.log('err :>> ', err);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <button className="see-button" onClick={() => { setIsShowUsers(false); setIsAddUser(true); }}>Create USer</button>
            <TableContainer component={Paper} className='user-table-container'>
                <Table sx={{ minWidth: 650 }} aria-label="user list table">
                    <TableHead className='t-head'>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell scope="row">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        // onClick={() => onUpdate(user.id)}
                                        sx={{ mr: 1 }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                    // onClick={() => onDelete(user.id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default UserList;
