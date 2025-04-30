import mongoose, { Document, Schema } from 'mongoose';

interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  date: Date;
}

const contactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IContact>('Contact', contactSchema);