import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const URL: any = process.env.DATABASE_URL;
const KEY: any = process.env.SUPABASE_KEY;

const supabase = createClient(URL, KEY)

export default async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    const list =  await supabase.from('Users').select(`*`)
    return res.status(200).send(list);
}

