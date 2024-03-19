export const CallAPI = async () => {
const   messages =  [{role: "user", content: "Say this is a test!"}];

const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method : "POST",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body : JSON.stringify({
        model : "gpt-3.5-turbo",
        messages,
        temperature : 0.7,
        max_tokens : 1_000,
    }),
});
const responseData = await response.json();
console.log("응답 데이터", responseData);

const message = responseData.choices[0].message.content;

return message;
}