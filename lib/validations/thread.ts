import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().min(3, {message: 'Minimum 3 Characters'}),
    accountId: z.string(),
})

export const CommentsValidation = z.object({
    thread: z.string().min(3, {message: 'Minimum 3 Characters'}),
})