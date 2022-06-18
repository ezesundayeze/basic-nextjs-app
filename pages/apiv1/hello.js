// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // fetch("/api/shipment/list")
  //   .then(res => res.json())
  //   .then(data => {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "application/json");
  //     res.end(JSON.stringify(data));
  //   });
  res.status(200).json({ name: 'John Doe' })
}
