import { Schema, model } from "mongoose";

interface IArticle {
  adminId: string;
  name: string;
  description: string;
  author: string;
  created_at: {
    type: Date;
  };
}

const Marticle = new Schema<IArticle>({
  adminId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
});

export const Article = model<IArticle>("Article", Marticle);
