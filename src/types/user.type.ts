export interface TUser {
    id: string
    name: string
    username: any
    phoneNumber: any
    profileImage: any
    coverImage: any
    email: string
    role: string
    address: any
    status: "BLOCKED" | "ACTIVE"
    dateOfBirth: any
    gender: any
    createdAt: string
    updatedAt: string
  }