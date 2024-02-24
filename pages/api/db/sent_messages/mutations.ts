import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const URL: any = process.env.DATABASE_URL;
const KEY: any = process.env.SUPABASE_KEY;

const supabase = createClient(URL, KEY)

export async function mutationsSentMessages(data: any) {
    const list =  await supabase.from("SentMessages").insert({
        id: data.id,
        metadata: {
            display_phone_number: data.display_phone_number,
            phone_number_id: data.phone_number_id
        },
        message: data.message,
        id_api: data.id_api,
        timestamp:data.timestamp,
        status_message: data.status_message,
        recipient_id:data.recipient_id
    })
    // console.log("Estado de la mutación: ", list.error?.code)
    return list.status;
}

export async function updateSentMessages(data: any) {
    const list =  await supabase.from("SentMessages").update({
            status_message:data.status_message,
            timestamp:data.timestamp,
            recipient_id:data.recipient_id
    }).eq("id", data.id)
    // console.log("Estado de la actualización: ", list.error?.code)
    return list.status;
}

export async function mutationsCreateMessages(data: any) {
    const list =  await supabase.from("ReceivedMessages").insert(data)
    // console.log("Estado de la creación: ", list.error)
    return list.status;
}
