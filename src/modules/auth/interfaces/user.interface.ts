export interface IUser {
  _id?: any,
  email: string,
  password?: string,
  createdAt: Date,
  updatedAt: Date,
  refreshToken?: string
}
