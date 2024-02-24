import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(
    {
      consul_date: ["2024-01-10", "2026-02-10", "2026-03-19", "2026-10-10"],
      consul_time: ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30"],
      asc_date: ["2026-01-09", "2026-02-09", "2026-03-18", "2026-10-09"],
      asc_time: ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30"]
    })
}
