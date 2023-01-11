export const getText = async () =>{
    return {text:"Hello"}
}
export default function handler(req,res){
    const text = getText();
    res.status(200).json(text);
}