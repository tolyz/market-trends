/**
 * GET /
 * Chart page.
 */
exports.getChart = (req, res) => {
  res.render('chart', {
    title: 'Chart'
  });
};