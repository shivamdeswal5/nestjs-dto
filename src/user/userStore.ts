interface Hair {
    color : string
    type: string
}

interface Address{
    address: string
    city: string
    state: string
    stateCode: string
    country: string
}

export interface User {
    id: number
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
    phone: number
    hair: Hair
    address: Address

}

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
