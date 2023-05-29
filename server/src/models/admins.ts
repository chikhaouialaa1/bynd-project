import { Schema, model } from "mongoose";

interface IAdmin {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  published: boolean;
  created_at: {
    type: Date;
  };
}

const Madmin = new Schema<IAdmin>({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
});

export const Admin = model<IAdmin>("admins", Madmin);
