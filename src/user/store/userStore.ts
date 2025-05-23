import { User } from "../interface/user.interface"

export const userStore : User[] = [
    {
        id: 1,
        firstName: 'shivam',
        lastName: 'deswal',
        age: 22,
        gender: 'male',
        email: 'shivam@gmail.com',
        phone: 123456789,
        hair : {
            color: 'Brown',
            type: 'Curly',
        },
        address: {
            address: "626 Main Street",
            city: "Phoenix",
            state: "Mississippi",
            stateCode: "MS",
            country: "United States"
        }
    },
        {
        id: 2,
        firstName: 'raman',
        lastName: 'sharma',
        age: 22,
        gender: 'male',
        email: 'raman@gmail.com',
        phone: 123456789,
        hair : {
            color: 'Brown',
            type: 'Curly',
        },
        address: {
            address: "626 Main Street",
            city: "Phoenix",
            state: "Mississippi",
            stateCode: "MS",
            country: "United States"
        }
    },

]
export { User }

