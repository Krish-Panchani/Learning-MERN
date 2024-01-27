const {z} = require('zod');
// Zod is a TypeScript-first schema declaration and validation library.

//registerSchema is a schema object that defines the shape of the data that we want to validate.
const registerSchema = z.object({
    username: z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3, {message: "Name must be at least 3 characters long"})
    .max(100, {message: "Name must be at most 100 characters long"}),

    password: z
    .string({required_error: "Password is Required"})
    // .trim()
    .min(6, {message: "Password must be at least 6 characters long"})
    .max(100, {message: "Password must be at most 100 characters long"}),

    email: z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message: "Invalid Email"})
    .min(6, {message: "Email must be at least 6 characters long"})
    .max(100, {message: "Email must be at most 100 characters long"}),

    phone: z
    .string({required_error: "Phone is Required"})
    .trim()
    .min(10, {message: "Phone must be at least 10 characters long"})
    .max(10, {message: "Phone must be at most 10 characters long"}),
});

const loginSchema = z.object({

    email: z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message: "Invalid Email"})
    .min(6, {message: "Email must be at least 6 characters long"})
    .max(100, {message: "Email must be at most 100 characters long"}),

    password: z
    .string({required_error: "Password is Required"})
    // .trim()
    .min(6, {message: "Password must be at least 6 characters long"})
    .max(100, {message: "Password must be at most 100 characters long"}),
});

module.exports = registerSchema, loginSchema;