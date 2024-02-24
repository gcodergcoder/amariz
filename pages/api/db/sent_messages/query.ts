import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const URL: any = process.env.DATABASE_URL;
const KEY: any = process.env.SUPABASE_KEY;

const supabase = createClient(URL, KEY)

export default async function getIdSentMessage(req: NextApiRequest, res: NextApiResponse, api = false) {
    const query =  await supabase.from('ReceivedMessages').select("from,message")
    const len_ : any = query.data?.length
    const u: any = query.data
    let new_list =[]
    for(let i=0; i<=len_-1; i++){
        new_list.push({"from": u[i].from, "message": u[i].message})
    }
    if(api === true){
        return new_list;
    }else{
        return res.status(200).send(new_list);
    }
}


