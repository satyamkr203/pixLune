export const validateZod = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.errors });
    }
    // optional: attach validated data to req
    // req.validatedData = result.data;
    next();
  };
};

