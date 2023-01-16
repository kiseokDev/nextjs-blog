import type { NextApiRequest, NextApiResponse } from 'next'

export const getText = async () =>{
    return {text:"Hello"}
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const text = getText();
    res.status(200).json(text);
}
