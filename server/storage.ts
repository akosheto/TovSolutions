import { type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { v4 as uuidv4 } from "crypto";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemoryStorage implements IStorage {
  private submissions: ContactSubmission[] = [];

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const now = new Date();
    const result: ContactSubmission = {
      id: this.generateId(),
      ...submission,
      createdAt: now,
    };
    this.submissions.push(result);
    return result;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.submissions].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

export const storage = new MemoryStorage();
