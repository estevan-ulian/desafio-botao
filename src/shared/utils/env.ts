import z from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string(),
	BASE_API_URL: z.string().url(),
});

const envParsed = envSchema.safeParse(process.env);

if (!envParsed.success) {
	throw new Error(envParsed.error.message);
}

export const env = envParsed.data;
