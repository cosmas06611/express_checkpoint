module.exports = {
  verifyTime: (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hourOfDay = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
      // It's a weekday between 9 AM and 5 PM, so continue to the next middleware
      next();
    } else {
      // It's outside working hours, send an error message
      res
        .status(403)
        .send(
          "Access Denied: The web application is only available during working hours."
        );
    }
  },
};
