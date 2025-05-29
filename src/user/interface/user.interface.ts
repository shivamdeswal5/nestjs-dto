export interface Hair {
    color : string
    type: string
}

export interface Task {
  title: string;
  startDate: string; 
  endDate: string;
}

export interface Address{
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
    tasks: Task[];

}
