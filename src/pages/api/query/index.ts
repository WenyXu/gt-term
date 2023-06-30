import type { NextApiRequest, NextApiResponse } from 'next';
import conn from '../../../lib/pg';
const AsciiTable = require('ascii-table');

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req.body;
  try {
    const result = await conn.query(query);
    let output = 'OK';
    if (result.fields.length > 0) {
      let headers = result.fields.map((f) => f['name']);
      let rows = result.rows.map((row) => headers.map((col) => row[col]));
      let table = new AsciiTable();
      table.setHeading(...headers);
      for (let row of rows) {
        table.addRow(...row);
      }
      output = table.toString();
    }

    return res.status(200).json({ data: output, raws: result });
  } catch (err) {
    return res.status(500).json({ data: err });
  }
}
