import z from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string(),
});

const envParsed = envSchema.safeParse(process.env);

if (!envParsed.success) {
	throw new Error(envParsed.error.message);
}

export const env = envParsed.data;
